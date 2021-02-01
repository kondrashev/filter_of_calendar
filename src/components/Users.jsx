import React from 'react';
import $ from 'jquery';
import { useReducer } from 'react';
class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.load_users .header_users div:nth-child(7)').mouseover(function () {
            $(this).find('path')
                .css({
                    fill: '#FF7439'
                })
            $(this).find('h')
                .css({
                    color: '#FF7439'
                })
            $(this).find('path')
                .attr('d', 'M5.5 -4.80825e-07C5.78448 -4.55955e-07 5.97409 0.0882244 6.16375 0.264695L10.7155 4.49998C11.0948 4.85292 11.0948 5.38235 10.7155 5.73529C10.3362 6.08824 9.76722 6.08824 9.38791 5.73529L5.5 2.11761L1.61209 5.73529C1.23278 6.08823 0.663794 6.08823 0.284483 5.73529C-0.0948266 5.38235 -0.0948266 4.85292 0.284483 4.49998L4.83625 0.264695C5.02591 0.0882244 5.31035 -4.97405e-07 5.5 -4.80825e-07Z')
        })
        $('.load_users .header_users div:nth-child(7)').mouseout(function () {
            $(this).find('path')
                .css({
                    fill: ''
                })
            $(this).find('h')
                .css({
                    color: ''
                })
            $(this).find('path')
                .attr('d', 'M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z')
        })
        $(`.load_users .list_users div:nth-child(${7}) div`).mouseover(function () {
            $(this).find('path')
                .css({
                    fill: '#FF7439'
                })
        })
        $(`.load_users .list_users div:nth-child(${7}) div`).mouseout(function () {
            $(this).find('path')
                .css({
                    fill: ''
                })
        })
        // mark_user
        $(`.load_users .list_users div:nth-child(${7}) div:nth-child(${1})`).click(function () {
            let mark = $(this).attr('index');
            $('.load_users .list_users').each(function () {
                if ($(this).find('.circle').attr('index') == mark && $(this).find('.circle').css('backgroundColor') != 'rgb(255, 0, 0)') {
                    $(this).find('.circle')
                        .css({
                            backgroundColor: 'red',
                            border: '2px solid grey'
                        })
                } else {
                    $(this).find('.circle')
                        .css({
                            backgroundColor: '',
                            border: ''
                        })
                }
            })
        })
        // delete_user
        $(`.load_users .list_users div:nth-child(${7}) div:nth-child(${2})`).click(function () {
            $('.load_users .list_users').each(function () {
                if ($(this).find('.circle').css('backgroundColor') == 'rgb(255, 0, 0)') {
                    $(this).remove();
                }
            })
        })
    }
    render() {
        let list = [];
        for (let i = 1; i < 15; i++) list.push(i);
        const listUsers = list.map((key) => {
            let number = 0;
            let email = '';
            if (key == 14) {
                number = 13;
            } else {
                number = key;
            }
            if (key > 10) {
                email = 'nataha91@natasha.com'
            } else {
                email = 'user@user.com'
            }
            return (
                <div
                    className='list_users'
                >
                    <div>
                        <div
                            className='circle'
                            index={key}
                        ></div>
                    </div>
                    <div>
                        <h>User{number}</h>
                        <h>{email}</h>
                    </div>
                    <div>
                        <h>Февраль 10, 2020</h>
                    </div>
                    <div>
                        <h>Февраль 10, 2020</h>
                    </div>
                    <div>
                        <h>view_landing_course</h>
                        <div
                            className='course'
                        ></div>
                    </div>
                    <div>
                        <h>Как наладить отношения</h>
                        <div
                            className='relation'
                        ></div>
                    </div>
                    <div>
                        <div
                            index={key}
                        >
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 22.2C0.7 22.2 0.500003 22.1 0.300003 21.9C0.100003 21.7 0 21.4 0 21.1L0.300003 16C0.300003 15.8 0.399991 15.5 0.599991 15.4L15.7 0.299988C15.9 0.0999878 16.1 0 16.4 0C16.7 0 16.9 0.0999878 17.1 0.299988L21.9 5.10004C22.1 5.30004 22.2 5.49999 22.2 5.79999C22.2 6.09999 22.1 6.3 21.9 6.5L6.8 21.6C6.6 21.8 6.4 21.9 6.2 21.9L1 22.2ZM2.2 16.5L2 20.1L5.59999 19.9L19.8 5.70001L16.4 2.29999L2.2 16.5Z" fill="black" />
                                <path d="M18.5 8.90004C18.2 8.90004 18 8.80005 17.8 8.60005L13.5 4.3C13.1 3.9 13.1 3.30004 13.5 2.90004C13.9 2.50004 14.4999 2.50004 14.8999 2.90004L19.1999 7.20002C19.5999 7.60002 19.5999 8.20005 19.1999 8.60005C18.9999 8.80005 18.7 8.90004 18.5 8.90004Z" fill="black" />
                                <path d="M1.5 18.7C1.4 18.7 1.4 18.7 1.3 18.7C1.2 18.7 1.19999 18.7 1.09999 18.7L1 21.2L3.39999 21.1C3.39999 21 3.4 20.9 3.5 20.8C3.5 19.6 2.7 18.7 1.5 18.7Z" fill="black" />
                            </svg>
                        </div>
                        <div>
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8 4.70001H1C0.4 4.70001 0 4.30001 0 3.70001C0 3.10001 0.4 2.70001 1 2.70001H21.8C22.4 2.70001 22.8 3.10001 22.8 3.70001C22.8 4.30001 22.3 4.70001 21.8 4.70001Z" fill="black" />
                                <path d="M14.0001 4.09998C13.8001 2.89998 12.7 2 11.4 2C10.2 2 9.10005 2.89998 8.80005 4.09998L6.80005 3.70001C7.20005 1.60001 9.10005 0 11.3 0C13.5 0 15.4 1.60001 15.8 3.70001L14.0001 4.09998Z" fill="black" />
                                <path d="M4.6001 24C3.6001 24 2.7001 23.1 2.6001 22.1L1.6001 4.79998C1.6001 4.19998 2.00012 3.80001 2.50012 3.70001C3.10012 3.70001 3.5001 4.09997 3.6001 4.59997L4.6001 21.9L18.1001 22L19.1001 4.59997C19.1001 3.99997 19.6001 3.60001 20.2001 3.70001C20.8001 3.70001 21.2001 4.19998 21.1001 4.79998L20.1001 22.1C20.0001 23.2 19.2001 24 18.1001 24H4.6001Z" fill="black" />
                                <path d="M7.59991 23.9152C7.09991 23.9152 6.59991 23.5152 6.59991 23.0152L5.8999 11.1152C5.8999 10.5152 6.29993 10.1152 6.79993 10.0152C7.29993 10.0152 7.7999 10.4152 7.8999 10.9152L8.59991 22.8152C8.59991 23.4152 8.19991 23.9152 7.59991 23.9152Z" fill="black" />
                                <path d="M15.2 23.9152C15.2 23.9152 15.1 23.9152 15.2 23.9152C14.6 23.9152 14.2 23.4152 14.2 22.8152L14.9 10.9152C14.9 10.3152 15.4 9.91519 16 10.0152C16.6 10.0152 17 10.5152 16.9 11.1152L16.2 23.0152C16.1 23.5152 15.7 23.9152 15.2 23.9152Z" fill="black" />
                                <path d="M11.3999 20.3C10.7999 20.3 10.3999 19.9 10.3999 19.3V7.39996C10.3999 6.79996 10.7999 6.39996 11.3999 6.39996C11.9999 6.39996 12.3999 6.79996 12.3999 7.39996V19.3C12.3999 19.9 11.8999 20.3 11.3999 20.3Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div
                className='load_users'
            >
                <div
                    className='line'
                ></div>
                <div
                    className='header_users'
                >
                    <div>
                        <div
                            className='circle'
                        ></div>
                    </div>
                    <div>Пользователь</div>
                    <div>Дата регистрации</div>
                    <div>Последняя активность</div>
                    <div>Последнее действие</div>
                    <div>Продукт</div>
                    <div>
                        <h>Отобразить<p>15</p></h>
                        <div
                            className='vector'
                        >
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
                {listUsers}
            </div>
        )
    }
}
export default Users;