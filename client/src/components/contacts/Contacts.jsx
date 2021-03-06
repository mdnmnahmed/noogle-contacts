import React from 'react'
import ContactComp from './ContactComp';

const Contacts = ({ allContacts, removeDeletedContact, allContactsLoadingAnim }) => {
    return (
        <div>
            {/* {
                selectedContacts.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteSelectedContact())}> <span className="fa fa-trash"></span> Delete All </button>
                ) : null
            } */}
            <div align="center">
                <div className="col-lg-10 p-0">
                    <table className="contactTable p-0 table table-responsive-sm table-center text-center table-hover table-striped shadow">
                        <thead className="bg-primary text-white shadow">
                            <tr>
                                {/* <th colSpan="2">
                                    <div className="row">
                                        <div align="left" className="ml-3">
                                            <div className="custom-control custom-checkbox">
                                                <input id="selectAll" type="checkbox" className="custom-control-input"
                                                    value={selectAll}
                                                    onClick={() => setSelectAll(!selectAll)}
                                                />
                                                <label htmlFor="selectAll" className="custom-control-label"></label>
                                            </div>
                                        </div>
                                        <div className="ml-5">
                                            Name
                                        </div>
                                    </div>
                                </th> */}
                                <th colSpan="2">Name</th>
                                <th>Mobile No</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allContacts.map((singleContact) => (
                                    <ContactComp
                                        singleContact={singleContact}
                                        key={singleContact._id}
                                        removeDeletedContact={removeDeletedContact}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        allContactsLoadingAnim ? (
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="50" viewBox="0 0 128 128"><rect width="100%" height="100%" fill="transparent"></rect><g fill="#084d8a"><circle cx="16" cy="64" r="16"></circle><circle cx="16" cy="64" r="14.344" transform="rotate(45 64 64)"></circle><circle cx="16" cy="64" r="12.531" transform="rotate(90 64 64)"></circle><circle cx="16" cy="64" r="10.75" transform="rotate(135 64 64)"></circle><circle cx="16" cy="64" r="10.063" transform="rotate(180 64 64)"></circle><circle cx="16" cy="64" r="8.063" transform="rotate(225 64 64)"></circle><circle cx="16" cy="64" r="6.438" transform="rotate(270 64 64)"></circle><circle cx="16" cy="64" r="5.375" transform="rotate(315 64 64)"></circle><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="487ms" repeatCount="indefinite"></animateTransform></g></svg>
                        ) : ''
                    }

                    {
                        allContactsLoadingAnim === false && allContacts === '' ? (
                            <div className="text-danger font-weight-bold">No Contact Created Yet</div>
                        ) : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default Contacts;
