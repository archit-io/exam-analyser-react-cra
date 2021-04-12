const dropDown = [
                {id:'currPyqOption', type: `Current/PYQ`, 
                    dropV: [
                        {eventK:'current', val:`Current`},
                        {eventK:'pyq', val: `PYQ`}
                    ]
                },
                {id:'preMainsOption', type: `Prelims/Mains`,
                    dropV: [
                        {eventK:'prelims', val:`Prelims`},
                        {eventK:'mains', val: `Mains`}
                    ]
                },
                {id:'mainsOptions', type: `GS1/GS2/GS3/GS4/Optional`,
                    dropV: [
                        {eventK:'gsAll', val:`All GS`},                        
                        {eventK:'gs1', val:`GS1`},
                        {eventK:'gs2', val:`GS2`},
                        {eventK:'gs3', val:`GS3`},
                        {eventK:'gs4', val:`GS4`},
                        {eventK:'gs12', val:`GS 1 & 2`},
                        {eventK:'gs12', val:`GS 1 & 3`},
                        {eventK:'gs12', val:`GS 1 & 4`},
                        {eventK:'gs12', val:`GS 2 & 3`},
                        {eventK:'gs12', val:`GS 2 & 4`},
                        {eventK:'gs12', val:`GS 3 & 4`},
                        {eventK:'gs123', val:`GS 1, 2 & 3`},
                        {eventK:'gs124', val:`GS 1, 2 & 4`},
                        {eventK:'gs134', val:`GS 1, 3 & 4`},
                        {eventK:'gs234', val:`GS 2, 3 & 4`},
                        {eventK:'optional', val: `Optional`}                        
                    ]
                },
                {id:'mainsSubjectGS1Options', type: `GS1 Subject`,
                    dropV: [
                        {eventK:'gs1Society', val:`Society`},
                        {eventK:'gs1Geography', val:`Geography`},
                        {eventK:'gs1History', val:`History`}                        
                    ]
                },
                {id:'mainsHistoryGS1Options', type: `GS1/GS2/GS3/GS4/Optional`,
                    dropV: [
                        {eventK:'gs1HistoryAncient', val:`Ancient`},
                        {eventK:'gs1HistoryMedieval', val:`Medieval`},
                        {eventK:'gs1HistoryModern', val:`Modern`}                        
                    ]
                },
                {id:'yearPyqOption', type: `Year Wise`,
                    dropV: [
                        {eventK:'2020mains', val:`2020`},
                        {eventK:'2019mains', val:`2019`},
                        {eventK:'2018mains', val:`2018`},
                        {eventK:'2018mains', val:`2017`},
                        {eventK:'2018mains', val:`2016`},
                        {eventK:'2018mains', val:`2015`}
                        
                    ]
                },
                {id:'yearPyqAggregateOption', type: `Period Aggregate`,
                    dropV: [
                        {eventK:'lastTwoYears', val:`Previous 2 Years`},
                        {eventK:'lastThreeYears', val: `Previous 3 Years`},
                        {eventK:'lastFourYears', val: `Previous 4 Years`},
                        {eventK:'lastFiveYears', val: `Previous 5 Years`},
                        {eventK:'lastSixYears', val: `Previous 6 Years`},
                        {eventK:'lastSevenYears', val: `Previous 7 Years`}                       

                    ]
                },
                {id:'prelimsOptions', type: `General Studies/CSAT`,
                    dropV: [
                        {eventK:'prelimsGs', val:`General Studies`},
                        {eventK:'prelimsCsat', val:`CSAT`}                        
                    ]
                }
            ];

export function getDropDownList () {
    return dropDown;
}