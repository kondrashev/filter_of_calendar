import React from 'react';
import $ from 'jquery';
import {
    filterCalendar, monthPrevious,
    marker, month, differentChoice,
    clear, periodChoice, lastPeriod, erase
} from './Functions';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let differentMonth = 0;
        let differentMarker = 0;
        let markerPosition = [];
        filterCalendar('calendar', new Date().getFullYear(), new Date().getMonth());
        document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(1)').onclick = () => {
            $('.calendar_panel .mask td')
                .css({
                    backgroundColor: 'initial',
                    borderRadius: 'initial'
                })
            let choiceMonth = monthPrevious()[1];//choice_month
            let finishPeriodOfTime = 0;
            let start = 0;
            let lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                    start = new Date().getDate() - $(this).val();
                    finishPeriodOfTime = Math.abs(new Date().getDate() - $(this).val());
                }
            })
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) - 1);
            // all_period
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() == 0) {
                    marker($(this).val());
                }
            })
            // current_month
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)'
                    && $(this).val() == 4 && choiceMonth == new Date().getMonth()) {
                    month(new Date().getMonth() + 1);
                }
            })
            // previous_month
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)'
                    && $(this).val() == -4 && choiceMonth == new Date().getMonth() - 1) {
                    month(new Date().getMonth());
                }
            })
            // yesterday_last_day_of_month
            if (choiceMonth == new Date().getMonth() - 1 && new Date().getDate() == 1) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() == -1) {
                        marker($(this).val());
                    }
                })
            }
            // yesterday_today_7_30_days_period
            if (choiceMonth == new Date().getMonth()) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() != 4) {
                        marker($(this).val());
                    }
                })
            } else if (start < 0 && choiceMonth == (new Date().getMonth() - 1)) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                        lastPeriod(lastDayOfMonth, finishPeriodOfTime);
                    }
                })
            }
            // differenChoice
            if (start == 0) differentChoice(differentMonth, choiceMonth, markerPosition);
        }
        document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(3)').onclick = () => {
            $('.calendar_panel .mask td')
                .css({
                    backgroundColor: 'initial',
                    borderRadius: 'initial'
                })
            let finishPeriodOfTime = 0;
            let start = 0;
            let lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                    start = new Date().getDate() - $(this).val();
                    finishPeriodOfTime = Math.abs(new Date().getDate() - $(this).val());
                }
            })
            filterCalendar('calendar', document.querySelector('.calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(2)').dataset.month) + 1);
            let choiceMonth = monthPrevious()[1] + 1;//choice_month
            // all_period
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() == 0) {
                    marker($(this).val());
                }
            })
            // current_month
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)'
                    && $(this).val() == 4 && choiceMonth == new Date().getMonth()) {
                    month(new Date().getMonth() + 1);
                }
            })
            // previous_month
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)'
                    && $(this).val() == -4 && choiceMonth == new Date().getMonth() - 1) {
                    month(new Date().getMonth());
                }
            })
            // yesterday_last_day_of_month
            if (choiceMonth == new Date().getMonth() - 1 && new Date().getDate() == 1) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() == -1) {
                        marker($(this).val());
                    }
                })
            }
            // yesterday_today_7_30_days_period     
            if (choiceMonth == new Date().getMonth()) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)' && $(this).val() != 4) {
                        marker($(this).val());
                    }
                })
            } else if (start < 0 && choiceMonth == (new Date().getMonth() - 1)) {
                $('.menu .list_choice li').each(function () {
                    if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                        lastPeriod(lastDayOfMonth, finishPeriodOfTime);
                    }
                })
            }
            // differenChoice
            if (start == 0) differentChoice(differentMonth, choiceMonth, markerPosition);
        }
        $('body').on('click', '.calendar tbody td', function () {
            erase[0] = 1;
            if (differentMarker == 0) {
                $('.calendar tbody td')
                    .css({
                        backgroundColor: 'initial'
                    })
            }
            $('.menu .list_choice li')
                .css({
                    backgroundColor: 'initial'
                })
            $('.calendar tbody td.today')
                .css({
                    boxShadow: 'initial'
                })
            $('.calendar_panel .mask td')
                .css({
                    backgroundColor: 'initial',
                    borderRadius: ''
                })
            $('.calendar tbody td').each(function () {
                if ($(this).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
                    $(this)
                        .css({
                            borderRadius: 'initial'
                        })
                }
            })
            differentMarker++;
            markerPosition.push($(this).text());
            if (differentMarker > 3) {
                $('.calendar tbody td')
                    .css({
                        backgroundColor: 'initial'
                    })
                differentMarker = 0;
                markerPosition = [];
                markerPosition.push($(this).text())
            }
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                    $(this).css({
                        backgroundColor: 'initial'
                    });
                    $('.calendar tbody td')
                        .css({
                            backgroundColor: 'initial'
                        })
                    differentMarker = 0;
                }
            })
            if (differentMarker < 3) {
                differentMarker++;
            }
            $(this)
                .css({
                    backgroundColor: '#FF7439',
                    borderRadius: '50%'
                })
            if (markerPosition.length == 2) {
                let row;
                let cell;
                for (let i = parseInt(markerPosition[0]) + 1; i < markerPosition[1]; i++) {
                    for (row = 1; row < 7; row++) {
                        for (cell = 1; cell < 8; cell++) {
                            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == markerPosition[0]) {
                                $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                                    .css({
                                        backgroundColor: '#F5DED6',
                                        borderRadius: '50% 0 0 50%',
                                    })
                            }
                            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == markerPosition[1]) {
                                $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                                    .css({
                                        backgroundColor: '#F5DED6',
                                        borderRadius: '0 50% 50% 0',
                                    })
                            }
                            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == i) {
                                $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                                    .css({
                                        backgroundColor: '#F5DED6'
                                    })
                            }
                        }
                        cell = 1;
                    }
                }
            }
            differentMonth = monthPrevious()[1] + 1;//choice_month
        })
        let choicePeriod = '';
        let choiceFilter = '';
        $(`.calendar_panel .buttons button:nth-child(${2})`).click(function () {
            $(`.calendar_panel .buttons button:nth-child(${2})`)
                .css({
                    backgroundColor: '#FF7439'
                })
            $('.menu .list_choice li').each(function () {
                if ($(this).css('backgroundColor') == 'rgb(240, 243, 248)') {
                    choiceFilter = $(this).val();
                    $(this)
                        .css({
                            backgroundColor: 'initial'
                        })
                }
            })
            switch (choiceFilter) {
                case 0:
                    markerPosition = [];
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case 1:
                    markerPosition = [];
                    markerPosition.push(new Date().getDate());
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case -1:
                    markerPosition = [];
                    markerPosition.push(new Date().getDate() - 1);
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case 7:
                    markerPosition = [];
                    markerPosition.push(new Date().getDate() - 7);
                    markerPosition.push(new Date().getDate());
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case 30:
                    markerPosition = [];
                    markerPosition.push(new Date().getDate() - 30);
                    markerPosition.push(new Date().getDate());
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case 4:
                    markerPosition = [];
                    markerPosition.push(1);
                    markerPosition.push(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate());
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                case -4:
                    markerPosition = [];
                    markerPosition.push(1);
                    markerPosition.push(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate());
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
                    break;
                default:
                    periodChoice(choiceFilter, choicePeriod, markerPosition);
            }
            $('.menu .calendar_panel')
                .css({
                    display: 'none'
                })
            $('.main_page .modal_window')
                .css({
                    display: 'none'
                })
        })
        // close_choice
        $('body').on('click', '.main_page .choice', function () {
            clear(differentMarker, markerPosition);
        })
        // cancel_choice
        $(`.calendar_panel .buttons button:nth-child(${1})`).click(function () {
            clear(choiceFilter, choicePeriod, differentMarker, markerPosition);
            $('.menu .calendar_panel')
                .css({
                    display: 'none'
                })
            $('.list_choice')
                .css({
                    display: 'none'
                })
        })
    }
    render() {
        let cell = [];
        let row = [];
        for (let i = 1; i < 8; i++) {
            cell.push(i);
        }
        for (let i = 1; i < 7; i++) {
            row.push(i);
        }
        const cells = cell.map(() =>
            <td></td>
        )
        const rows = row.map((i) =>
            <tr>{cells}</tr>
        )
        return (
            <div
                className='calendar_panel'
            >
                <table
                    className='mask'
                >
                    {rows}
                </table>
                <table class='calendar'>
                    <thead>
                        <tr>
                            <td></td>
                            <td colspan='5'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Пн</td>
                            <td>Вт</td>
                            <td>Ср</td>
                            <td>Чт</td>
                            <td>Пт</td>
                            <td>Сб</td>
                            <td>Вс</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div
                    className='buttons'
                >
                    <button>Отмена</button>
                    <button>Обновить</button>
                </div>
            </div>
        )
    }
}
export default Calendar;