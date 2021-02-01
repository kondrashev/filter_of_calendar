import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar';
import {
    filterCalendar,
    monthPrevious,
    marker,
    month,
    erase
} from './Functions';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.list_choice li').click(function () {
            $('.list_choice li')
                .css({
                    backgroundColor: ''
                })
            $(this)
                .css({
                    backgroundColor: '#F0F3F8'
                })
        });
        $('.menu .period').mouseover(function () {
            $(this).find('path')
                .css({
                    fill: '#FF7439'
                })
            $(this).find('h')
                .css({
                    color: '#FF7439'
                })
            $(this).find('div:nth-child(3) path')
                .attr('d', 'M5.5 -4.80825e-07C5.78448 -4.55955e-07 5.97409 0.0882244 6.16375 0.264695L10.7155 4.49998C11.0948 4.85292 11.0948 5.38235 10.7155 5.73529C10.3362 6.08824 9.76722 6.08824 9.38791 5.73529L5.5 2.11761L1.61209 5.73529C1.23278 6.08823 0.663794 6.08823 0.284483 5.73529C-0.0948266 5.38235 -0.0948266 4.85292 0.284483 4.49998L4.83625 0.264695C5.02591 0.0882244 5.31035 -4.97405e-07 5.5 -4.80825e-07Z')
        })
        $('.menu .period').mouseout(function () {
            $(this).find('path')
                .css({
                    fill: ''
                })
            $(this).find('h')
                .css({
                    color: ''
                })
            $(this).find('div:nth-child(3) path')
                .attr('d', 'M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z')
        })
        $('.menu .filter').mouseover(function () {
            $(this).find('path')
                .css({
                    fill: '#FF7439'
                })
            $(this).find('h')
                .css({
                    color: '#FF7439'
                })
            $(this).find('div:nth-child(3) path')
                .attr('d', 'M5.5 -4.80825e-07C5.78448 -4.55955e-07 5.97409 0.0882244 6.16375 0.264695L10.7155 4.49998C11.0948 4.85292 11.0948 5.38235 10.7155 5.73529C10.3362 6.08824 9.76722 6.08824 9.38791 5.73529L5.5 2.11761L1.61209 5.73529C1.23278 6.08823 0.663794 6.08823 0.284483 5.73529C-0.0948266 5.38235 -0.0948266 4.85292 0.284483 4.49998L4.83625 0.264695C5.02591 0.0882244 5.31035 -4.97405e-07 5.5 -4.80825e-07Z')
        })
        $('.menu .filter').mouseout(function () {
            $(this).find('path')
                .css({
                    fill: ''
                })
            $(this).find('h')
                .css({
                    color: ''
                })
            $(this).find('div:nth-child(3) path')
                .attr('d', 'M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z')
        })
        // Today
        $('.list_choice li:nth-child(2) a').click(function () {
            $('.calendar_panel .mask div')
                .css({
                    backgroundColor: 'initial'
                })
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + monthPrevious()[0]);
            $('.calendar tbody td.today')
                .css({
                    boxShadow: 'initial'
                })
            $('.calendar tbody td')
                .css({
                    backgroundColor: ''
                })
            $('.calendar tbody td').each(function () {
                if ($(this).text() == new Date().getDate()) {
                    $(this)
                        .css({
                            backgroundColor: '#FF7439',
                            borderRadius: '50%'
                        })
                }
            })
        })
        // Yesterday
        $('.menu .list_choice li:nth-child(3) a').click(function () {
            $('.calendar_panel .mask div')
                .css({
                    backgroundColor: 'initial'
                })
            if (new Date().getDate() == 1) {
                let lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
                filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + monthPrevious()[0] - 1);
                $('.calendar tbody td').each(function () {
                    if ($(this).text() == lastDayOfMonth) {
                        $(this)
                            .css({
                                backgroundColor: '#FF7439',
                                borderRadius: '50%'
                            })
                    }
                })
            } else {
                filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + monthPrevious()[0]);
                $('.calendar tbody td.today')
                    .css({
                        boxShadow: 'initial'
                    })
                $('.calendar tbody td')
                    .css({
                        backgroundColor: ''
                    })
                $('.calendar tbody td').each(function () {
                    if ($(this).text() == new Date().getDate() - 1) {
                        $(this)
                            .css({
                                backgroundColor: '#FF7439',
                                borderRadius: '50%'
                            })
                    }
                })
            }
        })
        // Last 7, 30 days
        $('.menu .list_choice li').click(function () {
            erase[0] = 1;
            if ($(this).val() == -1 || $(this).val() == 1 ||
                $(this).val() == 4 || $(this).val() == -4) return;
            let periodOfTime = $(this).val();
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + monthPrevious()[0]);
            $('.calendar tbody td.today')
                .css({
                    boxShadow: 'initial'
                })
            $('.calendar tbody td')
                .css({
                    backgroundColor: '',
                    borderRadius: ''
                })
            $('.calendar_panel .mask div')
                .css({
                    backgroundColor: 'initial'
                })
            marker(periodOfTime);
        })
        // current_month
        $('.list_choice li:nth-child(6) a').click(function () {
            $('.calendar_panel .mask div')
                .css({
                    backgroundColor: 'initial'
                })
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + monthPrevious()[0]);
            month(new Date().getMonth() + 1, $('.list_choice li:nth-child(6)').val());
        })
        // previous_month
        $('.list_choice li:nth-child(7) a').click(function () {
            $('.calendar_panel .mask div')
                .css({
                    backgroundColor: 'initial'
                })
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + (monthPrevious()[0] - 1));
            month(new Date().getMonth(), $('.list_choice li:nth-child(7)').val());
        })
        $('.list_choice li a').click(function () {
            $('.list_choice')
                .css({
                    display: 'none'
                })
            $('.main_page .modal_window')
                .css({
                    display: 'none'
                })
        })
    }
    list_choice = () => {
        $('.list_choice')
            .css({
                display: 'initial'
            })
        $('.menu .calendar_panel')
            .css({
                display: 'initial'
            })
        $('.main_page .modal_window')
            .css({
                display: 'initial'
            })
    }
    calendar = () => {
        $('.menu .calendar_panel')
            .css({
                display: 'initial'
            })
        $('.main_page .modal_window')
            .css({
                display: 'initial'
            })
    }
    render() {
        return (
            <div
                className='menu'
            >
                <div
                    className='period'
                    onClick={this.list_choice}
                >
                    <div>
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5001 20H1C0.4 20 0 19.6 0 19V2.70001C0 2.10001 0.4 1.70001 1 1.70001H21.5001C22.1001 1.70001 22.5001 2.10001 22.5001 2.70001V19C22.5001 19.5 22.1001 20 21.5001 20ZM2 18H20.5001V3.70001H2V18Z" fill="black" />
                            <path d="M17.7002 5.29999C17.1002 5.29999 16.7002 4.89999 16.7002 4.29999V1C16.7002 0.4 17.1002 0 17.7002 0C18.3002 0 18.7002 0.4 18.7002 1V4.29999C18.7002 4.89999 18.3002 5.29999 17.7002 5.29999Z" fill="black" />
                            <path d="M5.00006 5.29999C4.40006 5.29999 4 4.89999 4 4.29999V1C4 0.4 4.40006 0 5.00006 0C5.60006 0 6.00006 0.4 6.00006 1V4.29999C6.00006 4.89999 5.50006 5.29999 5.00006 5.29999Z" fill="black" />
                            <path d="M21.5002 8.60004H1.2002C0.900195 8.60004 0.700195 8.40004 0.700195 8.10004C0.700195 7.80004 0.900195 7.60004 1.2002 7.60004H21.5002C21.8002 7.60004 22.0002 7.80004 22.0002 8.10004C22.0002 8.30004 21.8002 8.60004 21.5002 8.60004Z" fill="black" />
                            <path d="M5.7002 10.6H3.7002V12.5H5.7002V10.6Z" fill="black" />
                            <path d="M9.00012 10.6H7.1001V12.5H9.00012V10.6Z" fill="black" />
                            <path d="M12.3999 10.6H10.5V12.5H12.3999V10.6Z" fill="black" />
                            <path d="M15.7998 10.6H13.7998V12.5H15.7998V10.6Z" fill="black" />
                            <path d="M19.1002 10.6H17.2002V12.5H19.1002V10.6Z" fill="black" />
                            <path d="M5.7002 13.7H3.7002V15.7H5.7002V13.7Z" fill="black" />
                            <path d="M9.00012 13.7H7.1001V15.7H9.00012V13.7Z" fill="black" />
                            <path d="M12.3999 13.7H10.5V15.7H12.3999V13.7Z" fill="black" />
                            <path d="M15.7998 13.7H13.7998V15.7H15.7998V13.7Z" fill="black" />
                            <path d="M19.1002 13.7H17.2002V15.7H19.1002V13.7Z" fill="black" />
                        </svg>
                    </div>
                    <h>За 1 день</h>
                    <div>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <ul
                    className='list_choice'
                >
                    <li
                        value={0}
                    >
                        <a
                            href='#'
                        >
                            Весь срок
                        </a>
                    </li>
                    <li
                        value={1}
                    >
                        <a
                            href='#'
                        >
                            Сегодня
                        </a>
                    </li>
                    <li
                        value={-1}
                    >
                        <a
                            href='#'
                        >
                            Вчера
                        </a>
                    </li>
                    <li
                        value={7}
                    >
                        <a
                            href='#'
                        >
                            Последние 7 дней
                        </a>
                    </li>
                    <li
                        value={30}
                    >
                        <a
                            href='#'
                        >
                            Последние 30 дней
                        </a>
                    </li>
                    <li
                        value={4}
                    >
                        <a
                            href='#'
                        >
                            В этом месяце
                        </a>
                    </li>
                    <li
                        value={-4}
                    >
                        <a
                            href='#'
                        >
                            Прошлый месяц
                        </a>
                    </li>
                </ul>
                <div
                    className='filter'
                    onClick={this.calendar}
                >
                    <div>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.2998 10.5C2.6998 10.5 2.2998 10.1 2.2998 9.5V1C2.2998 0.4 2.6998 0 3.2998 0C3.8998 0 4.2998 0.4 4.2998 1V9.5C4.2998 10 3.7998 10.5 3.2998 10.5Z" fill="black" />
                            <path d="M3.2998 23.5C2.6998 23.5 2.2998 23.1 2.2998 22.5V15.2C2.2998 14.6 2.6998 14.2 3.2998 14.2C3.8998 14.2 4.2998 14.6 4.2998 15.2V22.5C4.2998 23.1 3.7998 23.5 3.2998 23.5Z" fill="black" />
                            <path d="M3.29999 15.7999C1.49999 15.7999 0 14.3 0 12.5C0 10.7 1.49999 9.19995 3.29999 9.19995C5.09999 9.19995 6.60004 10.7 6.60004 12.5C6.60004 14.3 5.09999 15.7999 3.29999 15.7999ZM3.29999 11.2999C2.59999 11.2999 2 11.9 2 12.6C2 13.3 2.59999 13.8999 3.29999 13.8999C3.99999 13.8999 4.60004 13.3 4.60004 12.6C4.60004 11.9 3.99999 11.2999 3.29999 11.2999Z" fill="black" />
                            <path d="M10.6997 15.2C10.0997 15.2 9.69971 14.8 9.69971 14.2V1C9.69971 0.4 10.0997 0 10.6997 0C11.2997 0 11.6997 0.4 11.6997 1V14.2C11.6997 14.7 11.2997 15.2 10.6997 15.2Z" fill="black" />
                            <path d="M10.6997 23.5C10.0997 23.5 9.69971 23.1 9.69971 22.5V19.2C9.69971 18.6 10.0997 18.2 10.6997 18.2C11.2997 18.2 11.6997 18.6 11.6997 19.2V22.5C11.6997 23.1 11.2997 23.5 10.6997 23.5Z" fill="black" />
                            <path d="M10.6999 19.7999C8.89989 19.7999 7.3999 18.3 7.3999 16.5C7.3999 14.7 8.89989 13.2 10.6999 13.2C12.4999 13.2 13.9999 14.7 13.9999 16.5C13.9999 18.3 12.4999 19.7999 10.6999 19.7999ZM10.6999 15.2999C9.99989 15.2999 9.3999 15.9 9.3999 16.6C9.3999 17.3 9.99989 17.8999 10.6999 17.8999C11.3999 17.8999 11.9999 17.3 11.9999 16.6C11.9999 15.9 11.3999 15.2999 10.6999 15.2999Z" fill="black" />
                            <path d="M18.1997 5.69995C17.5997 5.69995 17.1997 5.29995 17.1997 4.69995V1C17.1997 0.4 17.5997 0 18.1997 0C18.7997 0 19.1997 0.4 19.1997 1V4.69995C19.1997 5.19995 18.7997 5.69995 18.1997 5.69995Z" fill="black" />
                            <path d="M18.1997 23.5C17.5997 23.5 17.1997 23.1 17.1997 22.5V9.5C17.1997 8.9 17.5997 8.5 18.1997 8.5C18.7997 8.5 19.1997 8.9 19.1997 9.5V22.5C19.1997 23.1 18.7997 23.5 18.1997 23.5Z" fill="black" />
                            <path d="M18.1999 10.2C16.3999 10.2 14.8999 8.6999 14.8999 6.8999C14.8999 5.0999 16.3999 3.59998 18.1999 3.59998C19.9999 3.59998 21.4999 5.0999 21.4999 6.8999C21.4999 8.6999 19.9999 10.2 18.1999 10.2ZM18.1999 5.69995C17.4999 5.69995 16.8999 6.3 16.8999 7C16.8999 7.7 17.4999 8.29993 18.1999 8.29993C18.8999 8.29993 19.4999 7.7 19.4999 7C19.4999 6.3 18.8999 5.69995 18.1999 5.69995Z" fill="black" />
                        </svg>
                    </div>
                    <h>Фильтр</h>
                    <div>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276 1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <Calendar />
                <button
                    className='unload'
                >
                    Выгрузить
                 </button>
                <button
                    className='add_contacts'
                >
                    Добавить контакты
                 </button>
            </div>
        )
    }
}
export default Menu;