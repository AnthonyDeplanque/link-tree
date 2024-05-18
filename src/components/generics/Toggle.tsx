export interface ToggleProps {
  value: boolean;
  setValue: () => void;
  className?: string | string[]
}

const Toggle = (props: ToggleProps): JSX.Element => {
  const { value, setValue, className } = props;

  const customClassname = () => {
    if (className === undefined) return;
    if (typeof (className) === 'string')
      return className;
    else return className.join(' ')
  }
  return <>
    <label className="switch">
      <input type="checkbox" checked={value} onChange={setValue} />
      <span className={`slider round ${customClassname}`} />
    </label>
  </>
}

export default Toggle;