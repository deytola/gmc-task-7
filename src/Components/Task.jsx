import React from 'react';
import { useState } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Checkbox,
    IconButton,
    Button,
    Textarea
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';



export default function Task(props) {
    const { id, description, isDone} = props;
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        id,
        description,
        isDone
    });
    const updateTask = () => {
        dispatch(updateTodo(task));
        setShowModal(false);
    }
    const handleFormChange = (evt) => {
        const key = evt.target.id;
        if(key === 'isDone'){
            setTask({ ...task, [key]: evt.target.value === 'on' ? true : false })
        }else{
            setTask({ ...task, [key]: evt.target.value })
        }
    }
    const editTask = () => {
        setShowModal(true);
    }
    return (
        <div>
            <div>
                {showModal ? (
                    <div>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-3xl font=semibold">Add New Task</h3>
                                        <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                                                x
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full space-y-3">
                                            <div className="w-full">
                                                <Textarea placeholder="Task description..." id={'description'} value={task['description']} onChange={handleFormChange} />
                                            </div>
                                            <div>
                                                <Checkbox id={'isDone'} color="green" checked={task['isDone']} onChange={handleFormChange}/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <Button
                                            variant='outlined'
                                            className="text-[#2196f3]"
                                            type="button"
                                            onClick={updateTask}
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <Card className="w-96 m-5">
                <CardBody className="text-left">
                    <Typography variant="h5" className="mb-2">
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter >
                    <Checkbox color="green" checked={isDone} readOnly={true}/>
                    <IconButton variant="outlined" onClick={editTask}>
                        <i className="fas fa-edit" />
                    </IconButton>
                </CardFooter>
            </Card>
        </div>
        
    )
}
