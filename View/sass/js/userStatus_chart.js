$(document).ready(loadHome);
$('#loadHome').click(loadHome);

function loadHome() {
    FusionCharts.ready(function () {
        var revenueChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: 'chart-container-userStatus',
            width: '450',
            height: '450',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Users Status",
                    "paletteColors": "#ff8533,#330000",
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
                    "decimals": "0",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "subcaptionFontBold": "0",
                    "toolTipColor": "#ffffff",
                    "toolTipBorderThickness": "0",
                    "toolTipBgColor": "#000000",
                    "toolTipBgAlpha": "80",
                    "toolTipBorderRadius": "2",
                    "toolTipPadding": "5",
                },
                "data": [{
                        "label": "Active",
                        "value": "35"
                    },
                    {
                        "label": "Disable",
                        "value": "9"
                    }
                ]
            }
        }).render();
    });
}