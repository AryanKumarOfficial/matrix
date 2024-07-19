import React from "react";
import {useEffect} from "react";

const Modal = ({title, onClose, data}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])
    const formatDateAndTime = (date) => {
        return new Date(date).toLocaleString().split(",").join(" ~ ");
    }
    return (
        <div className={"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"}>
            <div className={"bg-white w-96 h-56 p-4 flex flex-col gap-10 rounded-md shadow-lg"}>
                <div className={"flex justify-between items-center"}>
                    <h2 className={"text-lg font-bold text-black"}>{title}</h2>
                    <button onClick={onClose} className={"text-red-500"}>Close</button>
                </div>
                <div className={"flex flex-col gap-4 relative"}>
                    <h3 className={"text-lg font-semibold text-gray-950 capitalize"}>{data?.name}</h3>
                    <p className={"text-sm text-gray-800"}>
                        {data?.email}
                    </p>
                    <p className={"text-sm text-gray-700"}>
                        {data?.message}
                    </p>
                    <p className={"text-sm text-gray-500 absolute right-0 -bottom-8"}>
                        {formatDateAndTime(data?.createdAt)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal;