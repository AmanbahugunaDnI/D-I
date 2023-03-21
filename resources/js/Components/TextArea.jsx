export default function TextArea({ id, name, value, onChange, label, required = false, mode = 'dark' }) {
    return (
        <div className="relative z-0">
            <textarea name={name} id={id} value={value} onChange={e => onChange(e.target.value)} className="block h-24 py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-custom peer text-black" placeholder=" " required={required} />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-custom  duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {label}
            </label>
        </div>
    );
}
