# Copyright (c) 2024, bala and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import today
class UserInfo(Document):
	def after_insert(self):
		doc=frappe.get_doc({
			"doctype": 'Library Member',
			"full_name":self.full_name,
			"email":self.email,
			"phone":self.phone,
			"membership_id":str(self.full_name +str(today()))
		})
		doc.insert()
	def on_update(self):
		doc=frappe.get_doc('Library Member',self.full_name)
		doc.email=self.email
		doc.phone=self.phone	
		doc.save()