
interface Area {
    mi: number;
    km: number;
}

export interface IState {
    name: string;
    flag: string;
    short: string;
    capital: string;
    largestCity: string;
    population: number;
    totalArea: Area;
    landArea: Area;
    waterArea: Area;
    numberOfReps: number;
}
export class State implements IState {
    public get capital(): string {
        return this._capital
    }
    public set capital(value: string) {
        this._capital = value
    }
    public get numberOfReps(): number {
        return this._numberOfReps
    }
    public set numberOfReps(value: number) {
        this._numberOfReps = value
    }
    public get waterArea(): Area {
        return this._waterArea
    }
    public set waterArea(value: Area) {
        this._waterArea = value
    }
    public get landArea(): Area {
        return this._landArea
    }
    public set landArea(value: Area) {
        this._landArea = value
    }
    public get totalArea(): Area {
        return this._totalArea
    }
    public set totalArea(value: Area) {
        this._totalArea = value
    }
    public get population(): number {
        return this._population
    }
    public set population(value: number) {
        this._population = value
    }
    public get largestCity(): string {
        return this._largestCity
    }
    public set largestCity(value: string) {
        this._largestCity = value
    }
    public get short(): string {
        return this._short
    }
    public set short(value: string) {
        this._short = value
    }
    public get flag(): string {
        return this._flag
    }
    public set flag(value: string) {
        this._flag = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    constructor(
        private _name: string,
        private _flag: string,
        private _short: string,
        private _capital: string,
        private _largestCity: string,
        private _population: number,
        private _totalArea: Area,
        private _landArea: Area,
        private _waterArea: Area,
        private _numberOfReps: number,
    ) { }
}

export type StateType =
    | 'Alabama'
    | 'Alaska'
    | 'Arizona'
    | 'Arkansas'
    | 'California'
    | 'Colorado'
    | 'Connecticut'
    | 'Delaware'
    | 'Florida'
    | 'Georgia'
    | 'Hawaii'
    | 'Idaho'
    | 'Illinois'
    | 'Indiana'
    | 'Iowa'
    | 'Kansas'
    | 'Kentucky[E]'
    | 'Louisiana'
    | 'Maine'
    | 'Maryland'
    | 'Massachusetts[E]'
    | 'Michigan'
    | 'Minnesota'
    | 'Mississippi'
    | 'Missouri'
    | 'Montana'
    | 'Nebraska'
    | 'Nevada'
    | 'New Hampshire'
    | 'New Jersey'
    | 'New Mexico'
    | 'New York'
    | 'North Carolina'
    | 'North Dakota'
    | 'Ohio'
    | 'Oklahoma'
    | 'Oregon'
    | 'Pennsylvania[E]'
    | 'Rhode Island[F]'
    | 'South Carolina'
    | 'South Dakota'
    | 'Tennessee'
    | 'Texas'
    | 'Utah'
    | 'Vermont'
    | 'Virginia[E]'
    | 'Washington'
    | 'West Virginia'
    | 'Wisconsin'
    | 'Wyoming'

export type StateAbrType =
    | 'AL'
    | 'AK'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'FL'
    | 'GA'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY';


export const StateDetails = {
    'Alabama': { abbr: 'AL', capital: 'Montgomery', largest: 'Birmingham', ratification: 'Dec 14, 1819', population: '4,903,185', totalArea: { mi: '52,420', km: '135,767' }, landArea: { mi: '50,645', km: '131,171' }, waterArea: { mi: '1,775', km: '4,597' }, numberOfReps: '7', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/23px-Flag_of_Alabama.svg.png' },
    'Alaska': { abbr: 'AK', capital: 'Juneau', largest: 'Anchorage', ratification: 'Jan 3, 1959', population: '731,545', totalArea: { mi: '665,384', km: '1,723,337' }, landArea: { mi: '570,641', km: '1,477,953' }, waterArea: { mi: '94,743', km: '245,384' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/21px-Flag_of_Alaska.svg.png' },
    'Arizona': { abbr: 'AZ', capital: 'Phoenix', largest: '', ratification: 'Feb 14, 1912', population: '7,278,717', totalArea: { mi: '113,990', km: '295,234' }, landArea: { mi: '113,594', km: '294,207' }, waterArea: { mi: '396', km: '1,026' }, numberOfReps: '9', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/23px-Flag_of_Arizona.svg.png' },
    'Arkansas': { abbr: 'AR', capital: 'Little', largest: 'Rock', ratification: 'Jun 15, 1836', population: '3,017,804', totalArea: { mi: '53,179', km: '137,732' }, landArea: { mi: '52,035', km: '134,771' }, waterArea: { mi: '1,143', km: '2,961' }, numberOfReps: '4', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/23px-Flag_of_Arkansas.svg.png' },
    'California': { abbr: 'CA', capital: 'Sacramento', largest: 'Los Angeles', ratification: 'Sep 9, 1850', population: '39,512,223', totalArea: { mi: '163,695', km: '423,967' }, landArea: { mi: '155,779', km: '403,466' }, waterArea: { mi: '7,916', km: '20,501' }, numberOfReps: '53', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/23px-Flag_of_California.svg.png' },
    'Colorado': { abbr: 'CO', capital: 'Denver', largest: '', ratification: 'Aug 1, 1876', population: '5,758,736', totalArea: { mi: '104,094', km: '269,601' }, landArea: { mi: '103,642', km: '268,431' }, waterArea: { mi: '452', km: '1,170' }, numberOfReps: '7', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/23px-Flag_of_Colorado.svg.png' },
    'Connecticut': { abbr: 'CT', capital: 'Hartford', largest: 'Bridgeport', ratification: 'Jan 9, 1788', population: '3,565,278', totalArea: { mi: '5,543', km: '14,357' }, landArea: { mi: '4,842', km: '12,542' }, waterArea: { mi: '701', km: '1,816' }, numberOfReps: '5', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/20px-Flag_of_Connecticut.svg.png' },
    'Delaware': { abbr: 'DE', capital: 'Dover', largest: 'Wilmington', ratification: 'Dec 7, 1787', population: '973,764', totalArea: { mi: '2,489', km: '6,446' }, landArea: { mi: '1,949', km: '5,047' }, waterArea: { mi: '540', km: '1,399' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/23px-Flag_of_Delaware.svg.png' },
    'Florida': { abbr: 'FL', capital: 'Tallahassee', largest: 'Jacksonville', ratification: 'Mar 3, 1845', population: '21,477,737', totalArea: { mi: '65,758', km: '170,312' }, landArea: { mi: '53,625', km: '138,887' }, waterArea: { mi: '12,133', km: '31,424' }, numberOfReps: '27', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/23px-Flag_of_Florida.svg.png' },
    'Georgia': { abbr: 'GA', capital: 'Atlanta', largest: '', ratification: 'Jan 2, 1788', population: '10,617,423', totalArea: { mi: '59,425', km: '153,910' }, landArea: { mi: '57,513', km: '148,959' }, waterArea: { mi: '1,912', km: '4,951' }, numberOfReps: '14', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/23px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    'Hawaii': { abbr: 'HI', capital: 'Honolulu', largest: '', ratification: 'Aug 21, 1959', population: '1,415,872', totalArea: { mi: '10,932', km: '28,313' }, landArea: { mi: '6,423', km: '16,635' }, waterArea: { mi: '4,509', km: '11,678' }, numberOfReps: '2', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/23px-Flag_of_Hawaii.svg.png' },
    'Idaho': { abbr: 'ID', capital: 'Boise', largest: '', ratification: 'Jul 3, 1890', population: '1,787,065', totalArea: { mi: '83,569', km: '216,443' }, landArea: { mi: '82,643', km: '214,045' }, waterArea: { mi: '926', km: '2,398' }, numberOfReps: '2', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/19px-Flag_of_Idaho.svg.png' },
    'Illinois': { abbr: 'IL', capital: 'Springfield', largest: 'Chicago', ratification: 'Dec 3, 1818', population: '12,671,821', totalArea: { mi: '57,914', km: '149,995' }, landArea: { mi: '55,519', km: '143,793' }, waterArea: { mi: '2,395', km: '6,202' }, numberOfReps: '18', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/23px-Flag_of_Illinois.svg.png' },
    'Indiana': { abbr: 'IN', capital: 'Indianapolis', largest: '', ratification: 'Dec 11, 1816', population: '6,732,219', totalArea: { mi: '36,420', km: '94,326' }, landArea: { mi: '35,826', km: '92,789' }, waterArea: { mi: '593', km: '1,537' }, numberOfReps: '9', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/23px-Flag_of_Indiana.svg.png' },
    'Iowa': { abbr: 'IA', capital: 'Des Moines', largest: '', ratification: 'Dec 28, 1846', population: '3,155,070', totalArea: { mi: '56,273', km: '145,746' }, landArea: { mi: '55,857', km: '144,669' }, waterArea: { mi: '416', km: '1,077' }, numberOfReps: '4', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/23px-Flag_of_Iowa.svg.png' },
    'Kansas': { abbr: 'KS', capital: 'Topeka', largest: 'Wichita', ratification: 'Jan 29, 1861', population: '2,913,314', totalArea: { mi: '82,278', km: '213,100' }, landArea: { mi: '81,759', km: '211,754' }, waterArea: { mi: '520', km: '1,346' }, numberOfReps: '4', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/23px-Flag_of_Kansas.svg.png' },
    'Kentucky[E]': { abbr: 'KY', capital: 'Frankfort', largest: 'Louisville', ratification: 'Jun 1, 1792', population: '4,467,673', totalArea: { mi: '40,408', km: '104,656' }, landArea: { mi: '39,486', km: '102,269' }, waterArea: { mi: '921', km: '2,387' }, numberOfReps: '6', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/23px-Flag_of_Kentucky.svg.png' },
    'Louisiana': { abbr: 'LA', capital: 'Baton Rouge', largest: 'New Orleans', ratification: 'Apr 30, 1812', population: '4,648,794', totalArea: { mi: '52,378', km: '135,659' }, landArea: { mi: '43,204', km: '111,898' }, waterArea: { mi: '9,174', km: '23,761' }, numberOfReps: '6', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/23px-Flag_of_Louisiana.svg.png' },
    'Maine': { abbr: 'ME', capital: 'Augusta', largest: 'Portland', ratification: 'Mar 15, 1820', population: '1,344,212', totalArea: { mi: '35,380', km: '91,633' }, landArea: { mi: '30,843', km: '79,883' }, waterArea: { mi: '4,537', km: '11,750' }, numberOfReps: '2', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/19px-Flag_of_Maine.svg.png' },
    'Maryland': { abbr: 'MD', capital: 'Annapolis', largest: 'Baltimore', ratification: 'Apr 28, 1788', population: '6,045,680', totalArea: { mi: '12,406', km: '32,131' }, landArea: { mi: '9,707', km: '25,142' }, waterArea: { mi: '2,699', km: '6,990' }, numberOfReps: '8', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/23px-Flag_of_Maryland.svg.png' },
    'Massachusetts[E]': { abbr: 'MA', capital: 'Boston', largest: '', ratification: 'Feb 6, 1788', population: '6,892,503', totalArea: { mi: '10,554', km: '27,336' }, landArea: { mi: '7,800', km: '20,202' }, waterArea: { mi: '2,754', km: '7,134' }, numberOfReps: '9', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/23px-Flag_of_Massachusetts.svg.png' },
    'Michigan': { abbr: 'MI', capital: 'Lansing', largest: 'Detroit', ratification: 'Jan 26, 1837', population: '9,986,857', totalArea: { mi: '96,714', km: '250,487' }, landArea: { mi: '56,539', km: '146,435' }, waterArea: { mi: '40,175', km: '104,052' }, numberOfReps: '14', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/23px-Flag_of_Michigan.svg.png' },
    'Minnesota': { abbr: 'MN', capital: 'St. Paul', largest: 'Minneapolis', ratification: 'May 11, 1858', population: '5,639,632', totalArea: { mi: '86,936', km: '225,163' }, landArea: { mi: '79,627', km: '206,232' }, waterArea: { mi: '7,309', km: '18,930' }, numberOfReps: '8', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/23px-Flag_of_Minnesota.svg.png' },
    'Mississippi': { abbr: 'MS', capital: 'Jackson', largest: '', ratification: 'Dec 10, 1817', population: '2,976,149', totalArea: { mi: '48,432', km: '125,438' }, landArea: { mi: '46,923', km: '121,531' }, waterArea: { mi: '1,508', km: '3,907' }, numberOfReps: '4', flag: 'https://static.dezeen.com/uploads/2020/06/mississippi-state-flag-design-dezeen-2364-hero-2048x1152.jpg' },
    'Missouri': { abbr: 'MO', capital: 'Jefferson City', largest: 'Kansas City', ratification: 'Aug 10, 1821', population: '6,137,428', totalArea: { mi: '69,707', km: '180,540' }, landArea: { mi: '68,742', km: '178,040' }, waterArea: { mi: '965', km: '2,501' }, numberOfReps: '8', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/23px-Flag_of_Missouri.svg.png' },
    'Montana': { abbr: 'MT', capital: 'Helena', largest: 'Billings', ratification: 'Nov 8, 1889', population: '1,068,778', totalArea: { mi: '147,040', km: '380,831' }, landArea: { mi: '145,546', km: '376,962' }, waterArea: { mi: '1,494', km: '3,869' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/23px-Flag_of_Montana.svg.png' },
    'Nebraska': { abbr: 'NE', capital: 'Lincoln', largest: 'Omaha', ratification: 'Mar 1, 1867', population: '1,934,408', totalArea: { mi: '77,348', km: '200,330' }, landArea: { mi: '76,824', km: '198,974' }, waterArea: { mi: '524', km: '1,356' }, numberOfReps: '3', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/23px-Flag_of_Nebraska.svg.png' },
    'Nevada': { abbr: 'NV', capital: 'Carson City', largest: 'Las Vegas', ratification: 'Oct 31, 1864', population: '3,080,156', totalArea: { mi: '110,572', km: '286,380' }, landArea: { mi: '109,781', km: '284,332' }, waterArea: { mi: '791', km: '2,048' }, numberOfReps: '4', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/23px-Flag_of_Nevada.svg.png' },
    'New Hampshire': { abbr: 'NH', capital: 'Concord', largest: 'Manchester', ratification: 'Jun 21, 1788', population: '1,359,711', totalArea: { mi: '9,349', km: '24,214' }, landArea: { mi: '8,953', km: '23,187' }, waterArea: { mi: '397', km: '1,027' }, numberOfReps: '2', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/23px-Flag_of_New_Hampshire.svg.png' },
    'New Jersey': { abbr: 'NJ', capital: 'Trenton', largest: 'Newark', ratification: 'Dec 18, 1787', population: '8,882,190', totalArea: { mi: '8,723', km: '22,591' }, landArea: { mi: '7,354', km: '19,047' }, waterArea: { mi: '1,368', km: '3,544' }, numberOfReps: '12', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/23px-Flag_of_New_Jersey.svg.png' },
    'New Mexico': { abbr: 'NM', capital: 'Santa Fe', largest: 'Albuquerque', ratification: 'Jan 6, 1912', population: '2,096,829', totalArea: { mi: '121,590', km: '314,917' }, landArea: { mi: '121,298', km: '314,161' }, waterArea: { mi: '292', km: '757' }, numberOfReps: '3', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/23px-Flag_of_New_Mexico.svg.png' },
    'New York': { abbr: 'NY', capital: 'Albany', largest: 'New York', ratification: 'Jul 26, 1788', population: '19,453,561', totalArea: { mi: '54,555', km: '141,297' }, landArea: { mi: '47,126', km: '122,057' }, waterArea: { mi: '7,429', km: '19,240' }, numberOfReps: '27', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/23px-Flag_of_New_York.svg.png' },
    'North Carolina': { abbr: 'NC', capital: 'Raleigh', largest: 'Charlotte', ratification: 'Nov 21, 1789', population: '10,488,084', totalArea: { mi: '53,819', km: '139,391' }, landArea: { mi: '48,618', km: '125,920' }, waterArea: { mi: '5,201', km: '13,471' }, numberOfReps: '13', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/23px-Flag_of_North_Carolina.svg.png' },
    'North Dakota': { abbr: 'ND', capital: 'Bismarck', largest: 'Fargo', ratification: 'Nov 2, 1889', population: '762,062', totalArea: { mi: '70,698', km: '183,108' }, landArea: { mi: '69,001', km: '178,711' }, waterArea: { mi: '1,698', km: '4,397' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/21px-Flag_of_North_Dakota.svg.png' },
    'Ohio': { abbr: 'OH', capital: 'Columbus', largest: '', ratification: 'Mar 1, 1803', population: '11,689,100', totalArea: { mi: '44,826', km: '116,098' }, landArea: { mi: '40,861', km: '105,829' }, waterArea: { mi: '3,965', km: '10,269' }, numberOfReps: '16', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/25px-Flag_of_Ohio.svg.png' },
    'Oklahoma': { abbr: 'OK', capital: 'Oklahoma City', largest: '', ratification: 'Nov 16, 1907', population: '3,956,971', totalArea: { mi: '69,899', km: '181,037' }, landArea: { mi: '68,595', km: '177,660' }, waterArea: { mi: '1,304', km: '3,377' }, numberOfReps: '5', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/23px-Flag_of_Oklahoma.svg.png' },
    'Oregon': { abbr: 'OR', capital: 'Salem', largest: 'Portland', ratification: 'Feb 14, 1859', population: '4,217,737', totalArea: { mi: '98,379', km: '254,799' }, landArea: { mi: '95,988', km: '248,608' }, waterArea: { mi: '2,391', km: '6,191' }, numberOfReps: '5', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/23px-Flag_of_Oregon.svg.png' },
    'Pennsylvania[E]': { abbr: 'PA', capital: 'Harrisburg', largest: 'Philadelphia', ratification: 'Dec 12, 1787', population: '12,801,989', totalArea: { mi: '46,054', km: '119,280' }, landArea: { mi: '44,743', km: '115,883' }, waterArea: { mi: '1,312', km: '3,397' }, numberOfReps: '18', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/23px-Flag_of_Pennsylvania.svg.png' },
    'Rhode Island[F]': { abbr: 'RI', capital: 'Providence', largest: '', ratification: 'May 29, 1790', population: '1,059,361', totalArea: { mi: '1,545', km: '4,001' }, landArea: { mi: '1,034', km: '2,678' }, waterArea: { mi: '511', km: '1,324' }, numberOfReps: '2', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/19px-Flag_of_Rhode_Island.svg.png' },
    'South Carolina': { abbr: 'SC', capital: 'Columbia', largest: 'Charleston', ratification: 'May 23, 1788', population: '5,148,714', totalArea: { mi: '32,020', km: '82,933' }, landArea: { mi: '30,061', km: '77,857' }, waterArea: { mi: '1,960', km: '5,076' }, numberOfReps: '7', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/23px-Flag_of_South_Carolina.svg.png' },
    'South Dakota': { abbr: 'SD', capital: 'Pierre', largest: 'Sioux Falls', ratification: 'Nov 2, 1889', population: '884,659', totalArea: { mi: '77,116', km: '199,729' }, landArea: { mi: '75,811', km: '196,350' }, waterArea: { mi: '1,305', km: '3,379' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/23px-Flag_of_South_Dakota.svg.png' },
    'Tennessee': { abbr: 'TN', capital: 'Nashville', largest: '', ratification: 'Jun 1, 1796', population: '6,829,174', totalArea: { mi: '42,144', km: '109,153' }, landArea: { mi: '41,235', km: '106,798' }, waterArea: { mi: '909', km: '2,355' }, numberOfReps: '9', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/23px-Flag_of_Tennessee.svg.png' },
    'Texas': { abbr: 'TX', capital: 'Austin', largest: 'Houston', ratification: 'Dec 29, 1845', population: '28,995,881', totalArea: { mi: '268,596', km: '695,662' }, landArea: { mi: '261,232', km: '676,587' }, waterArea: { mi: '7,365', km: '19,075' }, numberOfReps: '36', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/23px-Flag_of_Texas.svg.png' },
    'Utah': { abbr: 'UT', capital: 'Salt Lake City', largest: '', ratification: 'Jan 4, 1896', population: '3,205,958', totalArea: { mi: '84,897', km: '219,882' }, landArea: { mi: '82,170', km: '212,818' }, waterArea: { mi: '2,727', km: '7,064' }, numberOfReps: '4', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/23px-Flag_of_Utah.svg.png' },
    'Vermont': { abbr: 'VT', capital: 'Montpelier', largest: 'Burlington', ratification: 'Mar 4, 1791', population: '623,989', totalArea: { mi: '9,616', km: '24,906' }, landArea: { mi: '9,217', km: '23,871' }, waterArea: { mi: '400', km: '1,035' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/23px-Flag_of_Vermont.svg.png' },
    'Virginia[E]': { abbr: 'VA', capital: 'Richmond', largest: 'Virginia Beach', ratification: 'Jun 25, 1788', population: '8,535,519', totalArea: { mi: '42,775', km: '110,787' }, landArea: { mi: '39,490', km: '102,279' }, waterArea: { mi: '3,285', km: '8,508' }, numberOfReps: '11', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/22px-Flag_of_Virginia.svg.png' },
    'Washington': { abbr: 'WA', capital: 'Olympia', largest: 'Seattle', ratification: 'Nov 11, 1889', population: '7,614,893', totalArea: { mi: '71,298', km: '184,661' }, landArea: { mi: '66,456', km: '172,119' }, waterArea: { mi: '4,842', km: '12,542' }, numberOfReps: '10', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/23px-Flag_of_Washington.svg.png' },
    'West Virginia': { abbr: 'WV', capital: 'Charleston', largest: '', ratification: 'Jun 20, 1863', population: '1,792,147', totalArea: { mi: '24,230', km: '62,756' }, landArea: { mi: '24,038', km: '62,259' }, waterArea: { mi: '192', km: '497' }, numberOfReps: '3', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/23px-Flag_of_West_Virginia.svg.png' },
    'Wisconsin': { abbr: 'WI', capital: 'Madison', largest: 'Milwaukee', ratification: 'May 29, 1848', population: '5,822,434', totalArea: { mi: '65,496', km: '169,635' }, landArea: { mi: '54,158', km: '140,268' }, waterArea: { mi: '11,339', km: '29,367' }, numberOfReps: '8', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/23px-Flag_of_Wisconsin.svg.png' },
    'Wyoming': { abbr: 'WY', capital: 'Cheyenne', largest: '', ratification: 'Jul 10, 1890', population: '578,759', totalArea: { mi: '97,813', km: '253,335' }, landArea: { mi: '97,093', km: '251,470' }, waterArea: { mi: '720', km: '1,864' }, numberOfReps: '1', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/22px-Flag_of_Wyoming.svg.png' },
}

const StateTable = [
    "NAME               ABR     CAPITAL         LARGEST                 RATIFICATION        POPULATION      TOTAL AREA                          LAND AREA                           WATER AREA ",
    "Alabama	        AL	    Montgomery	    Birmingham	            Dec 14, 1819    	4,903,185	    52,420	        135,767	            50,645	        131,171	            1,775	        4,597	            7",
    "Alaska	            AK	    Juneau	        Anchorage	            Jan 3, 1959 	    731,545	        665,384	        1,723,337	        570,641	        1,477,953	        94,743	        245,384	            1",
    "Arizona	        AZ	    Phoenix	                                Feb 14, 1912    	7,278,717	    113,990	        295,234	            113,594	        294,207	            396	            1,026	                9",
    "Arkansas	        AR	    Little          Rock	                Jun 15, 1836    	3,017,804	    53,179	        137,732	            52,035	        134,771	            1,143	        2,961	            4",
    "California	        CA	    Sacramento	    Los Angeles	            Sep 9, 1850	        39,512,223	    163,695	        423,967	            155,779	        403,466	            7,916	        20,501	            53",
    "Colorado	        CO	    Denver	                                Aug 1, 1876 	    5,758,736	    104,094	        269,601	            103,642	        268,431	            452	            1,170	                7",
    "Connecticut	    CT	    Hartford	    Bridgeport	            Jan 9, 1788 	    3,565,278	    5,543	        14,357	            4,842	        12,542	            701	            1,816	                5",
    "Delaware	        DE	    Dover	        Wilmington	            Dec 7, 1787 	    973,764	        2,489	        6,446	            1,949	        5,047	            540	            1,399	                1",
    "Florida	        FL	    Tallahassee	    Jacksonville	        Mar 3, 1845 	    21,477,737	    65,758	        170,312	            53,625	        138,887	            12,133	        31,424	            27",
    "Georgia	        GA	    Atlanta	                                Jan 2, 1788 	    10,617,423	    59,425	        153,910	            57,513	        148,959	            1,912	        4,951	            14",
    "Hawaii	            HI	    Honolulu	                            Aug 21, 1959    	1,415,872	    10,932	        28,313	            6,423	        16,635	            4,509	        11,678	            2",
    "Idaho	            ID	    Boise	                                Jul 3, 1890 	    1,787,065	    83,569	        216,443	            82,643	        214,045	            926	            2,398	                2",
    "Illinois	        IL	    Springfield	    Chicago	                Dec 3, 1818 	    12,671,821	    57,914	        149,995	            55,519	        143,793	            2,395	        6,202	            18",
    "Indiana	        IN	    Indianapolis	                        Dec 11, 1816    	6,732,219	    36,420	        94,326	            35,826	        92,789	            593	            1,537	                9",
    "Iowa	            IA	    Des Moines	                            Dec 28, 1846    	3,155,070	    56,273	        145,746	            55,857	        144,669	            416	            1,077	                4",
    "Kansas	            KS	    Topeka	        Wichita	                Jan 29, 1861    	2,913,314	    82,278	        213,100	            81,759	        211,754	            520	            1,346	                4",
    "Kentucky[E]	    KY	    Frankfort	    Louisville	            Jun 1, 1792 	    4,467,673	    40,408	        104,656	            39,486	        102,269	            921	            2,387	                6",
    "Louisiana	        LA	    Baton Rouge	    New Orleans	            Apr 30, 1812    	4,648,794	    52,378	        135,659	            43,204	        111,898	            9,174	        23,761	            6",
    "Maine	            ME	    Augusta	        Portland	            Mar 15, 1820    	1,344,212	    35,380	        91,633	            30,843	        79,883	            4,537	        11,750	            2",
    "Maryland	        MD	    Annapolis	    Baltimore	            Apr 28, 1788    	6,045,680	    12,406	        32,131	            9,707	        25,142	            2,699	        6,990	            8",
    "Massachusetts[E]	MA	    Boston              	                Feb 6, 1788 	    6,892,503	    10,554	        27,336	            7,800	        20,202	            2,754	        7,134	            9",
    "Michigan	        MI	    Lansing	        Detroit	                Jan 26, 1837    	9,986,857	    96,714	        250,487	            56,539	        146,435	            40,175	        104,052	            14",
    "Minnesota	        MN	    St. Paul	    Minneapolis	            May 11, 1858    	5,639,632	    86,936	        225,163	            79,627	        206,232	            7,309	        18,930	            8",
    "Mississippi	    MS	    Jackson	                                Dec 10, 1817    	2,976,149	    48,432	        125,438	            46,923	        121,531	            1,508	        3,907	            4",
    "Missouri	        MO	    Jefferson City	Kansas City	            Aug 10, 1821    	6,137,428	    69,707	        180,540	            68,742	        178,040	            965	            2,501	                8",
    "Montana	        MT	    Helena	        Billings	            Nov 8, 1889 	    1,068,778	    147,040	        380,831	            145,546	        376,962	            1,494	        3,869	            1",
    "Nebraska	        NE	    Lincoln	        Omaha	                Mar 1, 1867 	    1,934,408	    77,348	        200,330	            76,824	        198,974	            524	            1,356	                3",
    "Nevada	            NV	    Carson City	    Las Vegas	            Oct 31, 1864    	3,080,156	    110,572	        286,380	            109,781	        284,332	            791	            2,048	                4",
    "New Hampshire	    NH	    Concord	        Manchester	            Jun 21, 1788    	1,359,711	    9,349	        24,214	            8,953	        23,187	            397	            1,027	                2",
    "New Jersey	        NJ	    Trenton	        Newark	                Dec 18, 1787    	8,882,190	    8,723	        22,591	            7,354	        19,047	            1,368	        3,544	            12",
    "New Mexico	        NM	    Santa Fe	    Albuquerque	            Jan 6, 1912 	    2,096,829	    121,590	        314,917	            121,298	        314,161	            292	            757	                     3",
    "New York	        NY	    Albany	        New York	            Jul 26, 1788    	19,453,561	    54,555	        141,297	            47,126	        122,057	            7,429	        19,240	            27",
    "North Carolina	    NC	    Raleigh	        Charlotte	            Nov 21, 1789    	10,488,084	    53,819	        139,391	            48,618	        125,920	            5,201	        13,471	            13",
    "North Dakota	    ND	    Bismarck	    Fargo	                Nov 2, 1889 	    762,062	        70,698	        183,108	            69,001	        178,711	            1,698	        4,397	            1",
    "Ohio	            OH	    Columbus	                            Mar 1, 1803 	    11,689,100	    44,826	        116,098	            40,861	        105,829	            3,965	        10,269	            16",
    "Oklahoma	        OK	    Oklahoma City	                        Nov 16, 1907    	3,956,971	    69,899	        181,037	            68,595	        177,660	            1,304	        3,377	            5",
    "Oregon	            OR	    Salem	        Portland	            Feb 14, 1859    	4,217,737	    98,379	        254,799	            95,988	        248,608	            2,391	        6,191	            5",
    "Pennsylvania[E]	PA	    Harrisburg	    Philadelphia	        Dec 12, 1787    	12,801,989	    46,054	        119,280	            44,743	        115,883	            1,312	        3,397	            18",
    "Rhode Island[F]	RI	    Providence	                            May 29, 1790    	1,059,361	    1,545	        4,001	            1,034	        2,678	            511	            1,324	                2",
    "South Carolina	    SC	    Columbia	    Charleston	            May 23, 1788    	5,148,714	    32,020	        82,933	            30,061	        77,857	            1,960	        5,076	            7",
    "South Dakota	    SD	    Pierre	        Sioux Falls	            Nov 2, 1889 	    884,659	        77,116	        199,729	            75,811	        196,350	            1,305	        3,379	            1",
    "Tennessee	        TN	    Nashville	                            Jun 1, 1796 	    6,829,174	    42,144	        109,153	            41,235	        106,798	            909	            2,355	                9",
    "Texas	            TX	    Austin	        Houston	                Dec 29, 1845    	28,995,881	    268,596	        695,662	            261,232	        676,587	            7,365	        19,075	            36",
    "Utah	            UT	    Salt Lake City	                        Jan 4, 1896 	    3,205,958	    84,897	        219,882	            82,170	        212,818	            2,727	        7,064	            4",
    "Vermont	        VT	    Montpelier	    Burlington	            Mar 4, 1791 	    623,989	        9,616	        24,906	            9,217	        23,871	            400	            1,035	                1",
    "Virginia[E]	    VA	    Richmond	    Virginia Beach	        Jun 25, 1788    	8,535,519	    42,775	        110,787	            39,490	        102,279	            3,285	        8,508	            11",
    "Washington	        WA	    Olympia	        Seattle	                Nov 11, 1889    	7,614,893	    71,298	        184,661	            66,456	        172,119	            4,842	        12,542	            10",
    "West Virginia	    WV	    Charleston	                            Jun 20, 1863    	1,792,147	    24,230	        62,756	            24,038	        62,259	            192	            497	                    3",
    "Wisconsin	        WI	    Madison	        Milwaukee	            May 29, 1848    	5,822,434	    65,496	        169,635	            54,158	        140,268	            11,339	        29,367	            8",
    "Wyoming	        WY	    Cheyenne	                            Jul 10, 1890    	578,759	        97,813	        253,335	            97,093	        251,470	            720	            1,864	                1",
]

const Flags =
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/23px-Flag_of_Alabama.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/21px-Flag_of_Alaska.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/23px-Flag_of_Arizona.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/23px-Flag_of_Arkansas.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/23px-Flag_of_California.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/23px-Flag_of_Colorado.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/20px-Flag_of_Connecticut.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/23px-Flag_of_Delaware.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/23px-Flag_of_Florida.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/23px-Flag_of_Georgia_%28U.S._state%29.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/23px-Flag_of_Hawaii.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/19px-Flag_of_Idaho.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/23px-Flag_of_Illinois.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/23px-Flag_of_Indiana.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/23px-Flag_of_Iowa.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/23px-Flag_of_Kansas.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/23px-Flag_of_Kentucky.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/23px-Flag_of_Louisiana.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/19px-Flag_of_Maine.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/23px-Flag_of_Maryland.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/23px-Flag_of_Massachusetts.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/23px-Flag_of_Michigan.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/23px-Flag_of_Minnesota.svg.png',
        'https://static.dezeen.com/uploads/2020/06/mississippi-state-flag-design-dezeen-2364-hero-2048x1152.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/23px-Flag_of_Missouri.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/23px-Flag_of_Montana.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/23px-Flag_of_Nebraska.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/23px-Flag_of_Nevada.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/23px-Flag_of_New_Hampshire.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/23px-Flag_of_New_Jersey.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/23px-Flag_of_New_Mexico.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/23px-Flag_of_New_York.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/23px-Flag_of_North_Carolina.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/21px-Flag_of_North_Dakota.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/25px-Flag_of_Ohio.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/23px-Flag_of_Oklahoma.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/23px-Flag_of_Oregon.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/23px-Flag_of_Pennsylvania.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/19px-Flag_of_Rhode_Island.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/23px-Flag_of_South_Carolina.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/23px-Flag_of_South_Dakota.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/23px-Flag_of_Tennessee.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/23px-Flag_of_Texas.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/23px-Flag_of_Utah.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/23px-Flag_of_Vermont.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/22px-Flag_of_Virginia.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/23px-Flag_of_Washington.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/23px-Flag_of_West_Virginia.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/23px-Flag_of_Wisconsin.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/22px-Flag_of_Wyoming.svg.png',
    ]