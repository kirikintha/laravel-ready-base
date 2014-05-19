/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function($){
    
    //Reports API
    window.Api = {
        Reports : {
            chart : {},
            settings : {
                chart: {
                    renderTo: 'report',
                    zoomType: 'x'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valuePrefix: '$'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0,
                    labelFormatter: function() {
                        var total = 0;
                        for(var i=this.yData.length; i--;) { total += this.yData[i]; };
                        return this.name + ' - Total: ' + this.tooltipOptions.valuePrefix + total.toFixed(2);
                    }
                },
                series: []
            }
        }
    };
    
    window.Api.Reports.init = function (context) {
        //Get base information from the DB.
        var settings = {
            url : '/api/reports/1',
            type : 'get',
            dataType : 'json',
            beforeSend : function () {
                window.Api.Reports.chart = new Highcharts.Chart(window.Api.Reports.settings);
                window.Api.Reports.chart.showLoading();
            },
            success : function (data) {
                window.Api.Reports.settings = $.extend(window.Api.Reports.settings, data);
                window.Api.Reports.chart = new Highcharts.Chart(window.Api.Reports.settings);
            },
            error: function () {
                alert('Sorry, could not load this chart please try again.');
            }
        };
        $.ajax(settings);
    };
    
    window.Api.Reports.init(document);
    
})(jQuery);