import { useEffect, useState } from 'react';
import { Employee } from '../types';
import React from 'react';
import { RowComponent } from './RowComponent';
import { listEmployee } from '../api';

export const ListComponent = () => {
    const [employee, setEmployee] = useState<Employee[]>();

    const fetchData = async () => {
        const employee_temp: Employee[] = await listEmployee();
        setEmployee(employee_temp);
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {employee ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map(e => (
                            <RowComponent key={e.id} employee={e} fetchData={fetchData}  />
                        ))}
                        <RowComponent  fetchData={fetchData}  />
                    </tbody>
                </table>
            ) : (
                'Loading...'
            )}
        </div>
    );
}
