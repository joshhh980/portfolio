import { FC, HTMLAttributes } from "react";

const Category: FC<HTMLAttributes<HTMLParagraphElement> & { active: boolean, onClick: () => void }> = ({
    active,
    onClick,
    children,
}) => {
    return (
        <div
            className={`p-2 border rounded-full mt-2 ${active ? "bg-primary text-white" : ""}`}
            onClick={onClick}
        >
            <p className='m-0'>
                {children}
            </p>
        </div>
    )
}

export default Category;