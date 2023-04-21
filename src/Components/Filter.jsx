import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
  } from "@material-tailwind/react";


export default function Filter(props) {
    const {changeListener} = props;
    return (
        <div className='flex items-center mt-2'>
            <Menu>
                <MenuHandler>
                    <IconButton variant="outlined">
                        <i className="fas fa-filter"/>
                    </IconButton>
                </MenuHandler>
                <MenuList>
                    <MenuItem value={undefined} onClick={changeListener}>Select Filter...</MenuItem>
                    <MenuItem value={'Done'} onClick={changeListener}>Done</MenuItem>
                    <MenuItem value={'Undone'} onClick={changeListener}>Undone</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}
