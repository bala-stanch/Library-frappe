// Copyright (c) 2024, bala and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {
	on_submit: function (frm) {
		
			frappe.call('library_management.library_management.doctype.library_transaction.library_transaction.sendemail',{'member':frm.doc.member,'transaction_type':frm.doc.transaction_type,'book':frm.doc.book})
		
		
	}
});
