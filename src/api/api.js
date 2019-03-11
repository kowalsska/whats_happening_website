// import rawData from './events_data.json'

const data = [{ "favourite": false, "name": "GDG DevFest", "url": "https://devfestflorida.org", "startDate": "2019-01-19", "endDate": "2019-01-19", "city": "Orlando, FL", "country": "U.S.A.", "twitter": "@gdgcentralfl", "id": 2, "type": "android" },
{ "favourite": false, "name": "GDG DevFest", "url": "https://windycity.devfest.io", "startDate": "2019-02-01", "endDate": "2019-02-01", "city": "Chicago, IL", "country": "U.S.A.", "cfpUrl": "https://www.papercall.io/windycitydevfest", "cfpEndDate": "2019-12-01", "id": 3, "type": "android" },
{ "favourite": false, "name": "GDG DevFest", "url": "https://devfest.mn", "startDate": "2019-02-02", "endDate": "2019-02-02", "city": "Minneapolis", "country": "U.S.A.", "cfpUrl": "https://devfest.mn/cfp", "cfpEndDate": "2019-11-02", "id": 4, "type": "android" },
{ "favourite": false, "name": "DroidKaigi", "url": "https://droidkaigi.jp/2019/en", "startDate": "2019-02-07", "endDate": "2019-02-08", "city": "Tokyo", "country": "Japan", "cfpUrl": "https://sessionize.com/droidkaigi2019", "cfpEndDate": "2018-10-21", "twitter": "@DroidKaigi", "id": 5, "type": "android" },
{ "favourite": false, "name": "RO MobOS", "url": "http://romobos.com", "startDate": "2019-02-14", "endDate": "2019-02-16", "city": "Cluj-Napoca", "country": "Romania", "twitter": "@romobos", "cfpUrl": "http://romobos.com/2019-edition/call-for-papers", "cfpEndDate": "2018-12-15", "id": 6, "type": "android" },
{ "favourite": false, "name": "FITC Amsterdam", "url": "http://fitc.ca/event/am19/", "startDate": "2019-02-18", "endDate": "2019-02-19", "city": "Amsterdam", "country": "Netherlands", "twitter": "@fitc", "id": 7, "type": "android" }]

function loadEventsData() {
    return data;
}

export default loadEventsData;