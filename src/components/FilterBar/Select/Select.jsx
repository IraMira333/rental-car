import Select from 'react-select';

const CustomSelect = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <Select
      options={options}
      className="custom-select custom-select-menu"
      onChange={value => onChange(value)}
      value={defaultValue(options, value)}
      styles={{
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: 'transform 0.5s',
          transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
        }),
        control: base => ({
          ...base,
          backgroundColor: '#f7f7fb',
          borderRadius: '14px',
          border: 'none',
          output: 'none',
          height: '48px',
        }),
      }}
    />
  );
};

export default CustomSelect;
