import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface SubDepartment {
  id: number;
  name: string;
}

interface Department {
  id: number;
  department: string;
  subDepartments: SubDepartment[];
}

const departments: Department[] = [
  {
    id: 1,
    department: 'customer_service',
    subDepartments: [
      { id: 11, name: 'support' },
      { id: 12, name: 'customer_success' },
    ],
  },
  {
    id: 2,
    department: 'design',
    subDepartments: [
      { id: 21, name: 'graphic_design' },
      { id: 22, name: 'product_design' },
      { id: 23, name: 'web_design' },
    ],
  },
];

const SecondB: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const handleExpandClick = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDepartmentSelect = (id: number) => {
    setSelected((prev) => {
      const isSelected = !prev[id];
      const newSelected = { ...prev, [id]: isSelected };
      
      const department = departments.find((dep) => dep.id === id);
      if (department) {
        department.subDepartments.forEach((sub) => {
          newSelected[sub.id] = isSelected;
        });
      }

      return newSelected;
    });
  };

  const handleSubDepartmentSelect = (subId: number, parentId: number) => {
    setSelected((prev) => {
      const isSelected = !prev[subId];
      const newSelected = { ...prev, [subId]: isSelected };
      
      const parentDepartment = departments.find((dep) => dep.id === parentId);
      if (parentDepartment) {
        const allSubSelected = parentDepartment.subDepartments.every((sub) => newSelected[sub.id]);
        newSelected[parentId] = allSubSelected;
      }

      return newSelected;
    });
  };

  return (
    <Box>
      {departments.map((department) => (
        <Box key={department.id} sx={{ marginBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleExpandClick(department.id)}>
              {expanded[department.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!selected[department.id]}
                  indeterminate={
                    !selected[department.id] &&
                    department.subDepartments.some((sub) => !!selected[sub.id])
                  }
                  onChange={() => handleDepartmentSelect(department.id)}
                />
              }
              label={department.department}
            />
          </Box>
          {expanded[department.id] &&
            department.subDepartments.map((sub) => (
              <Box key={sub.id} sx={{ pl: 4, ml:5}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!selected[sub.id]}
                      onChange={() => handleSubDepartmentSelect(sub.id, department.id)}
                    />
                  }
                  label={sub.name}
                />
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default SecondB;

