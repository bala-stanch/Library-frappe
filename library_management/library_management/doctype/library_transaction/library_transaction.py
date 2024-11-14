# Copyright (c) 2024, bala and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LibraryTransaction(Document):
	def before_save(self):
		book=frappe.get_doc('Book',self.book)
		max_limit=frappe.db.get_single_value('Library Terms','maximum_limit')
		if self.transaction_type =='Borrow':
			if book.status=='Available':
				member_limit=frappe.db.count('Library Transaction',{
					'member':self.member,
					'transaction_type':'Borrow'
				})
				if member_limit >= max_limit:
					frappe.throw("The member has reached their limit")
				book.status='Checked-out'
				book.save()
			else:
				frappe.throw('Book is not available')
		elif self.transaction_type=='Return':
			if book.status=='Available':
				frappe.throw("You can't return a book before being borrowed")
			else:
				book.status="Available"
				book.save()
		def after_insert(self):
			max_limit=frappe.db.get_single_value('Library Terms','maximum_limit')
			member_limit=frappe.db.count('Library Transaction',{
					'member':self.member,
					'transaction_type':'Borrow'
				})
			frappe.msgprint(f'{self.member} has only {max_limit-member_limit} transactions left')

@frappe.whitelist()
def sendemail(member,transaction_type,book):
		member_doc=frappe.get_doc('Library Member',str(member))
		frappe.sendmail(
				recipients = member_doc.email,
				cc = '',
				subject = 'Library Receipt',
				content = f'Dear {member},you have {transaction_type} {book} ',
				reference_doctype = '',
				reference_name = '',
				now = True
			)

