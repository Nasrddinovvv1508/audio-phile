import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

function Cart() {
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle w-14 h-14 text-white">
                    <div className="indicator">
                        <button>
                            <FaCartArrowDown size={30} />
                        </button>
                        <span className="badge badge-sm indicator-item text-black">0</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart