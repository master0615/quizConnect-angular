import * as _ from 'lodash';
import { SurveyModel } from 'survey-knockout';

export enum AppSurveyElementType {
    TEXT = "text",
    CHECKBOX = "checkbox",
    RADIO_GROUP = "radiogroup",
    DROPDOWN = "dropdown",
    COMMENT = "comment",
    RATING = "rating",
    BOOLEAN = "boolean",
    HTML = "html",
    EXPRESSION = "expression",
    FILE = "file",
    MATRIX = "matrix",
    MATRIX_DROPDOWN = "matrixdropdown",
    MATRIX_DYNAMIC = "matrixdynamic",
    MULTIPLE_TEXT = "multipletext",
    PANEL = "panel",
    PANEL_DYNAMIC = "paneldynamic",
    //Custom
    TAG_BOX = "tagbox",
    DATE_PICKER = "datepicker",
    BAR_RATING = "barrating",
    SORTABLE_LIST = "sortablelist",
    IMAGE_PICKER = "imagepicker",
    NO_UI_SLIDER = "nouislider",
    SIGNATURE_PAD = "signaturepad",
    EDITOR = "editor",
    AUTOCOMPLETE1 = "autocomplete1",
    BOOTSTRAPSLIDER = "bootstrapslider"
}

export enum AppSurveyCheckErrorsMode {
    ON_NEXT_PAGE = "onNextPage",
    ON_VALUE_CHANGED = "onValueChanged"
}

export enum AppSurveyClearInvisibleValues {
    NONE = "none",
    ON_COMPLETE = "onComplete",
    ON_HIDDEN = "onHidden"
}

export enum AppSurveyDisplayMode {
    DISPLAY = "display",
    EDIT = "edit"
}

export enum AppSurveyQuestionErrorLocation {
    TOP = "top",
    BOTTOM = "bottom",    
}


export enum AppSurveyQuestionTitleLocation {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left"
}

export enum AppSurveyQuestionsOrder {
    RANDOM = "random",
    INITIAL = "initial"
}

export enum AppSurveyShowProgressBar {
    OFF = "off",
    TOP = "top",
    BOTTOM = "bottom"
}

export enum AppSurveyShowQuestionNumbers {
    ON_SURVEY = "onSurvey",
    ON_PAGE = "onPage",
    OFF = "off"
}

export enum AppSurveyShowTimerPanel {
    NONE = "none",
    TOP = "top",
    BOTTOm = "bottom"
}

export enum AppSurveyShowTimerPanelMode {
    ALL = "all",
    PAGE = "page",
    SURVEY = "survey"
}
export enum AppSurveyNavigationButtonsVisibility {
    INHERIT = "inherit",
    SHOW = "show",
    HIDE = "hide"
}


export enum AppSurveyInputType {
    COLOR = "color",
    DATE = "date",
    DATETIME = "datetime",
    DATETIME_LOCAL = "datetime-local",
    EMAIL = "email",
    MONTH = "month",
    NUMBER = "number",
    PASSWORD = "password",
    RANGE = "range",
    TEL = "tel",
    TEXT = "text",
    TIME = "time",
    URL = "url",
    WEEK = "week"
}


export enum AppSurveyChoicesOrder {
    NONE = "none",
    ASCENDING = "ascending",
    DESCENDING = "descending",
    RANDOM = "random"
}

export enum AppSurveyVisibleCondition {
    IS_EMPLTY = "is empty",
    IS_NOT_EMPTY = "is not empty",
    EQUALS = "equals",
    NOT_EQUALS = "not equals",
    CONTAINS = "contains",
    NOT_CONTAINS = "not contains",
    GREATER = "greater",
    LESS = "less",
    GREATER_OR_EQUALS = "greater or equals",
    LESS_OR_EQUALS = "less or equals"
}

export enum AppSurveyExpressionDisplayStyle {
    NONE = "none",
    DECIMAL = "decimal",
    CURRENCY = "currency",
    PERCENT = "percent"
}

export enum AppSurveyMatrixCellType {
    DROPDOWN = "dropdown",
    CHECKBOX = "checkbox",
    RADIOGROUP = "radiogroup",
    TEXT = "text",
    COMMENT = "comment",
    BOOLEAN = "boolean",
    EXPRESSION = "expression"
}

export enum AppSurveyPanelsState {
    COLLAPSED = "collapsed",
    EXPANDED = "expanded",
    FIRST_EXPANDED = "firstExpanded"
}

export enum AppSurveyRenderMode {
    LIST = "list",
    PROGRESS_TOP = "progressTop",
    PROGRESS_BOTTOM = "progressBottom",
    PROGRESS_TOP_BOTTOM = "progressTopBottom"
}

export enum AppSurveyInputMask {
    NONE = "none",
    DATETIME = "datetime",
    CURRENCY = "currency",
    DECIMAL = "decimal",
    EMAIL = "email",
    PHONE = "phone",
    IP = "ip"
}

export enum AppSurveyBarRatingTheme {
    FONT_AWESOME_STARS = "fontawesome-stars",
    CSS_STARS = "css-stars",
    BARS_PILL = "bars-pill",
    BARS_1TO10 = "bars-1to10",
    BARS_MOVIE = "bars-movie",
    BARS_SQUARE = "bars-square",
    BARS_REVERSED = "bars-reversed",
    BARS_HORIZONTAL = "bars-horizontal",
    BOOTSTRAP_STARS = "bootstrap-stars",
    FONT_AWESOME_STARS_O = "fontawesome-stars-o"
}

export enum AppSurveyDateFormat {
    'mm/yy/dd',
    'mm-yy-dd',
    'd M y',
    'd MM y',
    'DD d MM yy',
    "'day' d 'of' MM 'in the year' yy"
}

export enum AppSurveyDisplayStyle {
    NONE = "none",
    DECIMAL = "decimal",
    CURRENCY = "currency",
    PERCENT = "percent"
}

export enum AppSurveyCurrencyFormat {
    AED ="AED",
    AFN ="AFN",
    ALL = "ALL",
    AMD = "AMD",
    ANG ="ANG",
    AOA ="AOA",
    ARS ="ARS",
    AUD ="AUD",
    AWG ="AWG",
    AZN ="AZN",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BGN = "BGN",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BOV = "BOV",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BWP = "BWP",
    BYN = "BYN",
    BZD = "BZD",
    CAD = "CAD",
    CDF = "CDF",
    CHE = "CHE",
    CHF = "CHF",
    CHW = "CHW",
    CLF = "CLF",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    COU = "COU",
    CRC = "CRC",
    CUC = "CUC",
    CUP = "CUP",
    CVE = "CVE",
    CZK = "CZK",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    EUR = "EUR",
    FJD = "FJD",
    FKP = "FKP",
    GBP = "GBP",
    GEL = "GEL",
    GHS = "GHS",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GTQ = "GTQ",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HML",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    ILS = "ILS",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    JMD = "JMD",
    JOD = "JOD",
    JPY = "JPY",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KMF = "KMF",
    KPW = "KPW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGA = "MGA",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRO = "MRP",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MXV = "MXV",
    MYR = "MYR",
    MZN = "MZN",
    NAD = "NAD",
    NGN = "NGN",
    NIO = "NIO",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PYG = "PYG",
    QAR = "QAR",
    RON = "RON",
    RSD = "RSD",
    RUB = "RUB",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDG = "SDG",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SLL = "SLL",
    SOS = "SOS",
    SRD = "SRD",
    SSP = "SSP",
    STD = "STD",
    SVC = "SVC",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TJS = "TJS",
    TMT = "TMT",
    TND = "TND",
    TOP = "TOP",
    TRY = "TRY",
    TTD = "TTD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGX = "UGX",
    USD = "USD",
    USN = "USN",
    UYI = "UYI",
    UYU = "UYU",
    UZS = "UZS",
    VEF = "VEF",
    VND = "VND",
    VUV = "VUV",
    WST = "WST",
    XAF = "XAF",
    XAG = "XAG",
    XAU = "XAU",
    XBA = "XBA",
    XBB = "XBB",
    XBC = "XBC",
    XBD = "XBD",
    XCD = "XCD",
    XDR = "XDR",
    XOF = "XOF",
    XPD = "XPD",
    XPF = "XPF",
    XPT = "XPT",
    XSU = "XSU",
    XTS = "XTS",
    XUA = "XUA",
    XXX = "XXX",
    YER = "YER",
    ZAR = "ZAR",
    ZMW = "ZMW",
    ZWL = "ZWL"
}

export class AppSurveyChoicesRestfull {
    url: string;
    path: string;
    valueName: string;
    titleName: string;
    testService: string;
}


export class AppSurveyModel {
    id: string;
    user_id: string;
    share_all: boolean;
    locale?: string;
    title?: any;
    description?: string;
    focusFirstQuestionAutomatic?: boolean;
    completedHtml?: string;
    completedBeforeHtml?: string;
    loadingHtml?: string;
    pages?: AppSurveyPageModel[];
    cookieName?: string;
    sendResultOnPageNext?: boolean;
    showNavigationButtons?: boolean;
    showPrevButton?: boolean;
    showTitle?: boolean;
    showPageTitles?: boolean;
    showCompletedPage?: boolean;
    questionsOrder?: AppSurveyQuestionsOrder;
    showPageNumbers?: boolean;
    showQuestionNumbers?: AppSurveyShowQuestionNumbers;
    questionTitleLocation?: AppSurveyQuestionTitleLocation;
    questionErrorLocation?: AppSurveyQuestionErrorLocation;
    showProgressBar?: AppSurveyShowProgressBar;
    mode?: AppSurveyDisplayMode;
    storeOthersAsComment?: boolean;
    maxTextLength?: number;
    maxOthersLength?: number;
    goNextPageAutomatic?: boolean | 'autogonext';
    clearInvisibleValues?: AppSurveyClearInvisibleValues;
    checkErrorsMode?: AppSurveyCheckErrorsMode;
    startSurveyText?: any;
    pagePrevText?: any;
    pageNextText?: any;
    completeText?: string;
    requiredText?: string;
    questionStartIndex?: string;
    questionTitleTemplate?: any;
    firstPageIsStarted?: boolean;
    isSinglePage?: boolean;
    maxTimeToFinish?: number;
    maxTimeToFinishPage?: number;
    showTimerPanel?: AppSurveyShowTimerPanel;
    showTimerPanelMode?: AppSurveyShowTimerPanelMode;
    triggers?: any[];

    created_at: string;
    updated_at: string;
}

export class AppSurveyPageModel {
    id: number;
    survey_id: number;
    name: string;
    visible?: boolean;
    visibleIf?: string;
    questionTitleLocation?: AppSurveyQuestionTitleLocation;
    title?: string;
    description?: string;
    navigationButtonsVisibility?: AppSurveyNavigationButtonsVisibility;
    questionsOrder?: AppSurveyQuestionsOrder;
    maxTimeToFinish?: number;

    elements?: AppSurveyElementModel[];
}

export class AppSurveyElementModel {
    id: number;
    survey_page_id: number;
    parent_id?: number;
    type: AppSurveyElementType;
    name: string;

    visible?: boolean;
    visibleIf?: string;
    width?: string;
    startWithNewLine?: boolean;
    indent?: number;
    title?: any;
    description?: any;
    commentText?: any;
    valueName?: string;
    enableIf?: string;
    defaultValue?: any; //array or json, string
    correctAnswer?: any; //array or json, string
    isRequired?: boolean;
    requiredErrorText?: any;
    readOnly?: boolean;
    validators?: any[]; 

    hasOther?: boolean;
    choices?: any[];
    choicesOrder?: AppSurveyChoicesOrder;
    choicesByUrl?: AppSurveyChoicesRestfull;
    otherText?: any;
    otherErrorText?: any;
    storeOthersAsComment?: boolean;
    renderAs?: string;

    titleLocation?: AppSurveyQuestionTitleLocation;
    questionTitleLocation?: AppSurveyQuestionTitleLocation;
    inputType?: AppSurveyInputType;
    size?: number;
    maxLength?: number;
    placeHolder?: any;
    inputFormat?: string;
    inputMask?: AppSurveyInputMask;
  
    hasComment?: boolean;
    showLabel?: boolean;

    showValues?: boolean;
    ratingTheme?: AppSurveyBarRatingTheme;

    cols?: any;
    rows?: any;

    rateValues?: any[];
    rateMin?: number;
    rateMax?: number;
    rateStep?: number;
    minRateDescription?: any;
    maxRateDescription?: any;

    showTitle?: boolean;
    label?: any;
    valueTrue?: string;
    valueFalse?: string;

    html?: any;

    expression?: string;
    format?: any;
    displayStyle?: AppSurveyDisplayStyle;
    currency?: AppSurveyCurrencyFormat;
    useGrouping?: boolean;

    showPreview?: boolean;
    allowMultiple?: boolean;
    imageHeight?: number; //string
    imageWidth?: number; //string
    storeDataAsText?: boolean;
    maxSize?: number; //long

    columns?: any[];
    //rows: any[];
    cells?: any[];
    isAllRowRequired?: boolean;

    horizontalScroll?: boolean;
    optionsCaption?: any;
    cellType?: AppSurveyMatrixCellType;
    columnColCount?: number;
    columnMinWidth?: number; //string;


    rowCount?: number;
    minRowCount?: number;
    maxRowCount?: number;
    keyName?: string;
    keyDuplicationError?: any;
    confirmDelete?: boolean;
    confirmDeleteText?: any;
    addRowText?: any;
    removeRowText?: any;

    items?: any[];
    itemSize?: number;
    colCount?: number;

    state?: AppSurveyPanelsState;
    innerIndent?: number;

    templateTitle?: any;
    templateDescription?: any;
    allowAddPanel?: boolean;
    allowRemovePanel?: boolean;
    panelCount?: number;
    minPanelCount?: number;
    maxPanelCount?: number;
    panelsState?: AppSurveyPanelsState;
    panelAddText?: any;
    panelRemoveText?: any;
    panelPrevText?: any;
    panelNextText?: any;

    showQuestionNumbers?: AppSurveyShowQuestionNumbers;
    showRangeInProgress?: string;
    renderMode?: AppSurveyRenderMode;
    templateTitleLocation?: AppSurveyQuestionTitleLocation;

    dateFormat?: AppSurveyDateFormat;

    step?: number;
    rangeMin?: number;
    rangeMax?: number;

    allowClear?: boolean;
    height?: number;
    
    emptyText?: string;
    
    elements?: AppSurveyElementModel[];
    templateElements?: AppSurveyElementModel[];
}