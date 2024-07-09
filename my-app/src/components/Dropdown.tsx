import DropdownStyle from './DropdownStyle.module.css'

interface IOption {
    value : string
}

interface IDropdownProps {
    label? : string,
    options : IOption[]
}

const Dropdown = (props: IDropdownProps) => {
    const { options } = props;
    return <div className={DropdownStyle.container}>
        <select className={DropdownStyle.select}>
            <option>Selecione</option>
            {options.map((option: IOption) => {
                return <option>{option.value}</option>
            })}
        </select>
    </div>
}

export default Dropdown