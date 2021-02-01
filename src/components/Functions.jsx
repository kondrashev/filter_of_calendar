import $ from 'jquery';
export const monthKeys = {
    'Январь': 0,
    'Февраль': 1,
    'Март': 2,
    'Апрель': 3,
    'Май': 4,
    'Июнь': 5,
    'Июль': 6,
    'Август': 7,
    'Сентябрь': 8,
    'Октябрь': 9,
    'Ноябрь': 10,
    'Декабрь': 11
}
export const filterCalendar = (classname, year, month) => {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += `<td class=${'today'}>` + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    document.querySelector('.' + classname + ' tbody').innerHTML = calendar;
    document.querySelector('.' + classname + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ', ' + D.getFullYear();
    document.querySelector('.' + classname + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('.' + classname + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
}
export const monthPrevious = () => {
    let separateDate = $('thead td:nth-child(2)').text().split(', ');
    let countMonth = [];
    let newSeparateDate = [];
    let end = 0;
    newSeparateDate.push(separateDate[0]);
    newSeparateDate.push(separateDate[1].slice(0, 4));
    Object.entries(monthKeys).map(([key, value]) => {
        if (newSeparateDate[0] === key) {
            countMonth.push((new Date().getMonth() - value) +
                (new Date().getFullYear() - newSeparateDate[1]) * 12);
            end = value - 1;
            countMonth.push(end);
        }
    })
    return countMonth;
}
export const takeMonth = (choiceFilter) => {
    let separateDate = [];
    if (choiceFilter == -1 && new Date().getDate() == 1) {
        Object.entries(monthKeys).map(([key, value]) => {
            if (new Date().getMonth() - 1 === value) {
                if (key === 'Ноябрь') {
                    separateDate[0] = key.toLowerCase().slice(0, 4);
                } else {
                    separateDate[0] = key.toLowerCase().slice(0, 3);
                }
            }
        })
        return separateDate[0];
    } else {
        separateDate = $('thead td:nth-child(2)').text().split(', ');
        if (separateDate[0] == 'Ноябрь') {
            return separateDate[0].toLowerCase().slice(0, 4)
        } else {
            return separateDate[0].toLowerCase().slice(0, 3)
        }
    }
}
export const takeMonthDifferent = () => {
    let dateSeparate = [];
    Object.entries(monthKeys).map(([key, value]) => {
        if (new Date().getMonth() - 1 === value) {
            if (key === 'Ноябрь') {
                dateSeparate[0] = key.toLowerCase().slice(0, 4);
            } else {
                dateSeparate[0] = key.toLowerCase().slice(0, 3);
            }
        }
    })
    return dateSeparate[0];
}
export const marker = (periodOfTime) => {
    $('.calendar tbody td.today')
        .css({
            boxShadow: 'initial'
        });
    switch (periodOfTime) {
        case 1:
            $('.calendar tbody td.today')
                .css({
                    backgroundColor: '#FF7439',
                    borderRadius: '50%'
                });
            return;
        case -1:
            $('.calendar tbody td').each(function () {
                if ($(this).text() == new Date().getDate() - 1) {
                    $(this)
                        .css({
                            backgroundColor: '#FF7439',
                            borderRadius: '50%'
                        })
                }
            })
            break;
        case 0:
            $('.calendar tbody td').each(function () {
                if ($(this).text() != '') {
                    $(this)
                        .css({
                            backgroundColor: '#F5DED6',
                            borderRadius: 'initial'
                        })
                }
            })
            break;
    }
    for (let i = new Date().getDate(); i > new Date().getDate() - periodOfTime; i--) {
        if (i == 0) break;
        let row;
        let cell;
        for (row = 1; row < 7; row++) {
            for (cell = 1; cell < 8; cell++) {
                if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == new Date().getDate()) {
                    $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#FF7439',
                            borderRadius: '50%'
                        })
                    $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#F5DED6',
                            borderRadius: '0 50% 50% 0',
                        })
                }
                if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == new Date().getDate() - periodOfTime) {
                    $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#FF7439',
                            borderRadius: '50%'
                        })
                    $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#F5DED6',
                            borderRadius: '50% 0 0 50%',
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
export const month = (monthChoice) => {
    $('.calendar tbody td.today')
        .css({
            boxShadow: 'initial',
            borderRadius: 'initial'
        })
    $('.calendar tbody td')
        .css({
            backgroundColor: ''
        })
    let row;
    let cell;
    for (row = 1; row < 7; row++) {
        for (cell = 1; cell < 8; cell++) {
            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() != '') {
                $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                    .css({
                        backgroundColor: '#F5DED6'
                    })
            }
            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == 1) {
                $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                    .css({
                        backgroundColor: '#FF7439',
                        borderRadius: '50%'
                    })
                $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                    .css({
                        backgroundColor: '#F5DED6',
                        borderRadius: '50% 0 0 50%'
                    })
            }
            if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == new Date(new Date().getFullYear(), monthChoice, 0).getDate()) {
                $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                    .css({
                        backgroundColor: '#FF7439',
                        borderRadius: '50%'
                    })
                $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                    .css({
                        backgroundColor: '#F5DED6',
                        borderRadius: '0 50% 50% 0'
                    })
            }
        }
        cell = 1;
    }
}
export const differentChoice = (differentMonth, choiceMonth, markerPosition) => {
    let row;
    let cell;
    if (differentMonth == choiceMonth) {
        $('.calendar tbody td.today')
            .css({
                boxShadow: 'initial',
                borderRadius: 'initial'
            })
        for (let i = parseInt(markerPosition[0]) + 1; i < markerPosition[1]; i++) {
            for (row = 1; row < 7; row++) {
                for (cell = 1; cell < 8; cell++) {
                    if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == markerPosition[0]) {
                        $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                            .css({
                                backgroundColor: '#F5DED6',
                                borderRadius: '50% 0 0 50%'
                            })
                        $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                            .css({
                                backgroundColor: '#FF7439',
                                borderRadius: '50%'
                            })
                    }
                    if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == markerPosition[1]) {
                        $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                            .css({
                                backgroundColor: '#F5DED6',
                                borderRadius: '0 50% 50% 0'
                            })
                        $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                            .css({
                                backgroundColor: '#FF7439',
                                borderRadius: '50%'
                            })
                    }
                    if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == i) {
                        $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                            .css({
                                backgroundColor: '#F5DED6'
                            })
                    }
                }
                cell = 1;
            }
        }
    }
}
export let erase = [];
export const clear = (differentMarker, markerPosition) => {
    erase[0] = 0;
    $('.main_page .choice').remove();
    $('.calendar tbody td')
        .css({
            backgroundColor: '',
            borderRadius: ''
        })
    $(`.calendar_panel .buttons button:nth-child(${2})`)
        .css({
            backgroundColor: ''
        })
    $('.calendar tbody td.today')
        .css({
            borderRadius: '50%',
            boxShadow: '0 0 10px rgb(115, 161, 146)'
        });
    $('.calendar_panel .mask td')
        .css({
            backgroundColor: 'initial',
            borderRadius: ''
        })
    $('.main_page .modal_window')
        .css({
            display: 'none'
        })
    $('.menu .list_choice li')
        .css({
            backgroundColor: 'initial'
        })
    differentMarker = 0;
    markerPosition = [];
}
export const panelChoice = (choicePeriod) => {
    $('.calendar_panel')
        .css({
            display: 'none'
        })
    $('.list_choice')
        .css({
            display: 'none'
        })
    $('.main_page')
        .append($('<div>')
            .attr({
                'class': 'choice'
            })
            .append($('<div>')
                .append(`${choicePeriod}`))
            .append($('<div>')
                .attr({
                    'class': 'close'
                })))
}
export const periodChoice = (choiceFilter, choicePeriod, markerPosition) => {
    if (erase[0] == 0) return;
    if (choiceFilter == '' && choicePeriod == '' && markerPosition.length == 0) return;
    if (markerPosition.length == 0) {
        choicePeriod = 'Весь срок';
        panelChoice(choicePeriod);
    } else {
        if (markerPosition[1] != undefined) {
            if (markerPosition[0] < 0) {
                choicePeriod = `${Math.abs(markerPosition[0])}${' '}${takeMonthDifferent()}${'-'}${markerPosition[1]}${' '}${takeMonth(choiceFilter)}${' '}${new Date().getFullYear()}${' г.'}`;
            } else {
                choicePeriod = `${markerPosition[0]}${' '}${takeMonth(choiceFilter)}${'-'}${markerPosition[1]}${' '}${takeMonth(choiceFilter)}${' '}${new Date().getFullYear()}${' г.'}`;
            }
        } else {
            choicePeriod = `${markerPosition[0]}${' '}${takeMonth(choiceFilter)}${' '}${' '}${new Date().getFullYear(choiceFilter)}${' г.'}`;
        }
        panelChoice(choicePeriod);
    }
}
export const lastPeriod = (lastDayOfMonth, finishPeriodOfTime) => {
    let row;
    let cell;
    for (let i = lastDayOfMonth; i > lastDayOfMonth - finishPeriodOfTime; i--) {
        for (row = 1; row < 7; row++) {
            for (cell = 1; cell < 8; cell++) {
                if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == i) {
                    $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#F5DED6'
                        })
                }
                if ($(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`).text() == lastDayOfMonth - finishPeriodOfTime) {
                    $(`.calendar tbody tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#FF7439',
                            borderRadius: '50%'
                        })
                    $(`.calendar_panel .mask tr:nth-child(${row}) td:nth-child(${cell})`)
                        .css({
                            backgroundColor: '#F5DED6',
                            borderRadius: '50% 0 0 50%',
                        })
                }
            }
            cell = 1;
        }
    }
}