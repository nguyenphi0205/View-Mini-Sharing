$(document).ready(loadHome);
$('#loadHome').click(loadHome);

function loadHome() {
    FusionCharts.ready(function () {
        var revenueChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: 'chart-container-fileCate',
            width: '450',
            height: '450',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Files in Category",
                    "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "use3DLighting": "0",
                    "showShadow": "0",
                    "enableSmartLabels": "0",
                    "startingAngle": "310",
                    "showLabels": "0",
                    "showPercentValues": "1",
                    "showLegend": "1",
                    "legendShadow": "0",
                    "legendBorderAlpha": "0",
                    "defaultCenterLabel": "Total file: 80 File",
                    "centerLabel": "$label: $value Files",
                    "centerLabelBold": "1",
                    "showTooltip": "0",
                    "decimals": "0",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "subcaptionFontBold": "0"
                },
                "data": [{
                        "label": "News",
                        "value": "19"
                    },
                    {
                        "label": "Sport",
                        "value": "32"
                    },
                    {
                        "label": "Code",
                        "value": "29"
                    }
                ]
            }
        }).render();
    });

}