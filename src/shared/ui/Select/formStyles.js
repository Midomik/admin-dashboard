export const formStyles = {
  option: (base, state) => ({
    ...base,
    textAlign: 'start',
    color: state.isSelected ? '#ffffff' : `#ffffff80`,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '150%',
    paddingLeft: 20,
    '&:hover': {
      color: state.isSelected ? '#ffffff' : '#ffffff99',
    },
    paddingTop: 6,
    paddingBottom: 0,
    backgroundColor: '#59b17a',

    borderRadius: 14,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    maxHeight: 'none',
  }),
  container: (base) => ({
    ...base,
    width: '224px',
  }),
  control: (base) => ({
    ...base,
    borderRadius: 60,
    backgroundColor: 'white',
    paddingRight: 8,
    paddingLeft: 10,
    border: '1px solid rgba(25, 26, 21, 0.1)',
    '&:hover': { backgroundColor: 'rgba(25, 26, 21, 0.1)' },
    height: '44px',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#1d1e21',
  }),
  menuList: (base) => ({
    ...base,

    padding: 0,
  }),
  menu: (base) => ({
    ...base,

    borderRadius: 14,
    overflowY: 'auto',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02);',
    maxHeight: 140,
    backgroundColor: '#59b17a',
    padding: 0,

    paddingTop: 7,
    paddingBottom: 13,
    right: 0,

    '::-webkit-scrollbar': {
      width: 8,
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      background: '#ffffff66',
    },
    '::-webkit-scrollbar-track': {
      marginTop: 14,
      marginBottom: 14,
    },
  }),
  singleValue: (base, state) => ({
    ...base,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    color: '#1d1e21',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#1d1e2166', // змініть колір на потрібний вам
  }),
  indicatorSeparator: () => ({
    display: 'none', // Приховуємо лінію між індикатором та списком
  }),
};
