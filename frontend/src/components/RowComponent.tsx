import React, { useState } from 'react';
import { Employee } from '../types';
import { createEmployee, deleteEmployee, updateEmployee } from '../api';

type RowProps = {
    employee?: Employee;
    fetchData: VoidFunction;
}

export const RowComponent: React.FC<RowProps> = ({ employee, fetchData }) => {
    const [mode, setMode] = useState<'view' | 'edit' | 'empty'>(employee ? 'view' : 'empty');
    const [localEmployee, setLocalEmployee] = useState<Employee>(employee || { id: 0, name: '', position: '', age: 0 });

    const handleSave = async () => {
        if (mode === 'edit') {
            await updateEmployee(localEmployee);
            setMode('view');
            await fetchData();
        } else if (mode === 'empty') {
            await createEmployee(localEmployee);
            await fetchData();
        }
    };

    const handleDelete = async () => {
        await deleteEmployee(localEmployee);
        await fetchData();
    };

    if (mode === 'view' && employee) {
        return (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.age}</td>
                <td>
                    <button onClick={() => setMode('edit')}>Edit</button>
                    <button onClick={() => handleDelete()}>Delete</button>
                </td>
            </tr>
        );
    }

    if (mode === 'edit' || mode === 'empty') {
        return (
            <tr>
                <td>
                    {localEmployee.id ? localEmployee.id.toString() : ''}
                </td>
                <td>
                    <input value={localEmployee.name} onChange={e => setLocalEmployee({ ...localEmployee, name: e.target.value })} />
                </td>
                <td>
                    <input value={localEmployee.position} onChange={e => setLocalEmployee({ ...localEmployee, position: e.target.value })} />
                </td>
                <td>
                    <input value={localEmployee.age.toString()} onChange={e => setLocalEmployee({ ...localEmployee, age: parseInt(e.target.value) })} />
                </td>
                <td>
                    <button type='button' onClick={handleSave}>Save</button>
                </td>
            </tr>
        );
    }

    return null;
};
