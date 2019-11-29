import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';
import * as React from 'react';

/**
 * Компонент для отрисовки выпадающего списка.
 *
 * @prop {string} label Лейбл.
 * @prop {function} onChange Обработчик события изменения.
 * @prop {string[]} options Данные фильтра.
 * @prop {string} value Выбраное значение фильтра.
 */
export const Select: React.SFC<{label: string; onChange: (e: any) => void; options: string[]; value: string}> = (props) => {
    const {label, onChange, options, value} = props;
    return (
        <FormControl className="filter">
            <InputLabel>{label}</InputLabel>
            <MaterialSelect value={value} onChange={onChange}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </MaterialSelect>
        </FormControl>
    );
};
