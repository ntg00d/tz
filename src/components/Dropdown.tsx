import {FC, useState} from 'react'
import {IDropdownProps} from '../models/props/Dropdown'

const Dropdown: FC<IDropdownProps> = ({
    categories,
    category,
    categoryHandle
}) => {
    const [toggle, setToggle] = useState(false)

    const dropdownHandle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="dropdown">
            <button onClick={dropdownHandle}>{category}</button>

            {toggle && (
                <div className="category__list">
                    {categories.map(category => (
                        <button key={category} onClick={() => {
                            categoryHandle(category)
                            dropdownHandle()
                        }}>{category}</button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown