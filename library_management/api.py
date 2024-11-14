import frappe
@frappe.whitelist()
def update_status(id,status):
    
    doc=frappe.get_doc('Book',id)
    doc.status=status
    doc.save()
    frappe.db.commit()
    return {"message":"updated successfully","status":status}