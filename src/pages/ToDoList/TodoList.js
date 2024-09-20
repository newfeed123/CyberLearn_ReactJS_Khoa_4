import React, { Component } from 'react';
import style from './Todolist.css'
import axios from 'axios'
class TodoList extends Component {

    state = {
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        },
    }

    getTaskList = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        })
        promise.then((result) => {
            console.log("thành công");
            console.log(result.data);
            this.setState({
                taskList: result.data
            })
        })
        promise.catch((err) => {
            console.log('fail');
        })
    }

    renderTaskToDo = () => {
        return this.state.taskList.filter(item => !item.status).map((item, index) => {
            <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                <button className="remove">
                    <i className="fa fa-trash-alt" />
                </button>
                <button className="complete">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-check-circle" />
                </button>
                </div>
            </li>
        })
    }

    renderTaskToDoDone = () => {
        return this.state.taskList.filter(item=>item.status).map((item, index) => {
            return <li key={index}>
                        <span>{item.name}</span>
                        <div className="buttons">
                        <button className="remove">
                            <i className="fa fa-trash-alt" />
                        </button>
                        <button className="complete">
                            <i className="far fa-check-circle" />
                            <i className="fas fa-check-circle" />
                        </button>
                        </div>
                    </li>
        })
    }

    //hàm chạy sau khi render
    componentDidMount() {
        this.getTaskList()
    }

    addTask = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        let {value, name} = e.target
        console.log(name, value);
        let newValues = {...this.state.values}

        newValues = {...newValues, [name]: value}

        let newErrors = {...this.state.errors}

        let regexString = /^[a-z A-Z]+$/

        if(!regexString.test(value) || value.trim() === ''){
            newErrors[name] = name + 'invalid !'
        } else {
            newErrors[name] = ''
        }

        newErrors = {...newErrors, [name]: value.trim() === ""}

        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors,
        })
    }

    render() {
        return (
            <form action="" onSubmit={() => {}}>

                <div className="card">
                    <button onClick={() => {this.getTaskList()}}>
                        Get task list
                    </button>
                    <div className="card__header">
                        <img src={require('./bg.png')} />
                    </div>
                    {/* <h2>hello!</h2> */}
                    <div className="card__body">
                        <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input onChange={this.handleChange} name='taskName' id="newTask" type="text" placeholder="Enter an activity..." />
                            <button id="addItem" onClick={() => {

                            }}>
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <p className='text text-danger'>{this.state.errors.taskName}</p>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {this.renderTaskToDo()}
                                {/* <li>
                                    <span>Đi ngủ</span>
                                    <div className="buttons">
                                    <button className="remove">
                                        <i className="fa fa-trash-alt" />
                                    </button>
                                    <button className="complete">
                                        <i className="far fa-check-circle" />
                                        <i className="fas fa-check-circle" />
                                    </button>
                                    </div>
                                </li> */}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {this.renderTaskToDoDone()}

                                {/* <li>
                                    <span>Ăn sáng</span>
                                    <div className="buttons">
                                    <button className="remove">
                                        <i className="fa fa-trash-alt" />
                                    </button>
                                    <button className="complete">
                                        <i className="far fa-check-circle" />
                                        <i className="fas fa-check-circle" />
                                    </button>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

            </form>
        );
    }
}

export default TodoList;