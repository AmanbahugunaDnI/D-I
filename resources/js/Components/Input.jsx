import { useEffect, useRef, useState } from "react";

export default function Input({
    id,
    name,
    value,
    onChange,
    label,
    required = false,
    type = 'text',
    mode = 'dark',
    isFocused = false,
    ref = null,
}) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const [showPassword, setShowPassword] = useState(false);


    let inputClass = 'block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer';
    let labelClass = 'peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';

    if (mode === 'dark') {
        inputClass += ' border-white focus:border-white text-white';
        labelClass += ' text-white peer-focus:text-white';
    } else {
        inputClass += ' border-custom focus:border-custom text-black';
        labelClass += ' text-custom peer-focus:text-custom';
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative w-full group -z-0">
            <input
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                name={name}
                id={id}
                value={value}
                onChange={e => onChange(e.target.value)}
                className={inputClass}
                placeholder=" "
                required={required}
                autoComplete="off"
                ref={input}
            />
            <label htmlFor={id} className={labelClass}>
                {label}
            </label>
        </div>
    );
}
