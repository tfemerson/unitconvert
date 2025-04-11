/**
 * 单位转换工具 - 主要JavaScript功能
 * 支持多种计量单位之间的转换，包括长度、面积、体积、重量、温度等
 */

// 语言包 - 中英文
const translations = {
    zh: {
        // 导航和标题
        appTitle: "单位转换工具",
        length: "长度/距离",
        area: "面积",
        volume: "体积",
        weight: "重量/质量",
        temperature: "温度",
        pressure: "压力",
        energy: "能量/功率",
        speed: "速度",
        time: "时间",
        density: "密度",
        angle: "角度",
        
        // 界面元素
        inputValue: "输入值",
        inputPlaceholder: "输入数值",
        from: "从",
        to: "到",
        resultLabel: "转换结果",
        copy: "复制",
        addToFavorites: "添加到收藏夹",
        removeFromFavorites: "从收藏夹移除",
        favorites: "收藏夹",
        history: "转换历史",
        clear: "清除",
        searchPlaceholder: "搜索单位...",
        formulaTitle: "转换公式",
        unitInfoTitle: "单位信息",
        footerText: "© 2023 单位转换工具 | 提供准确的单位转换计算",
        
        // 单位类别标题
        lengthConversion: "长度/距离转换",
        areaConversion: "面积转换",
        volumeConversion: "体积转换",
        weightConversion: "重量/质量转换",
        temperatureConversion: "温度转换",
        pressureConversion: "压力转换",
        energyConversion: "能量/功率转换",
        speedConversion: "速度转换",
        timeConversion: "时间转换",
        densityConversion: "密度转换",
        angleConversion: "角度转换",
        
        // 提示和通知
        copied: "已复制!",
        addedToFavorites: "已添加到收藏夹!",
        removedFromFavorites: "已从收藏夹移除!",
        historyCleared: "历史记录已清除!",
        noResult: "请输入有效数值",
        
        // 时间格式
        today: "今天",
        yesterday: "昨天",
    },
    en: {
        // Navigation and titles
        appTitle: "Unit Converter",
        length: "Length/Distance",
        area: "Area",
        volume: "Volume",
        weight: "Weight/Mass",
        temperature: "Temperature",
        pressure: "Pressure",
        energy: "Energy/Power",
        speed: "Speed",
        time: "Time",
        density: "Density",
        angle: "Angle",
        
        // Interface elements
        inputValue: "Input Value",
        inputPlaceholder: "Enter value",
        from: "From",
        to: "To",
        resultLabel: "Result",
        copy: "Copy",
        addToFavorites: "Add to Favorites",
        removeFromFavorites: "Remove from Favorites",
        favorites: "Favorites",
        history: "History",
        clear: "Clear",
        searchPlaceholder: "Search units...",
        formulaTitle: "Conversion Formula",
        unitInfoTitle: "Unit Information",
        footerText: "© 2023 Unit Converter | Providing accurate unit conversions",
        
        // Unit category titles
        lengthConversion: "Length/Distance Conversion",
        areaConversion: "Area Conversion",
        volumeConversion: "Volume Conversion",
        weightConversion: "Weight/Mass Conversion",
        temperatureConversion: "Temperature Conversion",
        pressureConversion: "Pressure Conversion",
        energyConversion: "Energy/Power Conversion",
        speedConversion: "Speed Conversion",
        timeConversion: "Time Conversion",
        densityConversion: "Density Conversion",
        angleConversion: "Angle Conversion",
        
        // Notifications
        copied: "Copied!",
        addedToFavorites: "Added to favorites!",
        removedFromFavorites: "Removed from favorites!",
        historyCleared: "History cleared!",
        noResult: "Please enter a valid value",
        
        // Time format
        today: "Today",
        yesterday: "Yesterday",
    }
};

// 单位数据 - 每个类别的单位及其转换因子
const unitData = {
    length: {
        units: {
            // 基准单位: 米 (m)
            meter: { value: 1, symbol: "m", namesZh: "米", namesEn: "meter" },
            kilometer: { value: 1000, symbol: "km", namesZh: "千米", namesEn: "kilometer" },
            centimeter: { value: 0.01, symbol: "cm", namesZh: "厘米", namesEn: "centimeter" },
            millimeter: { value: 0.001, symbol: "mm", namesZh: "毫米", namesEn: "millimeter" },
            micrometer: { value: 0.000001, symbol: "µm", namesZh: "微米", namesEn: "micrometer" },
            nanometer: { value: 1e-9, symbol: "nm", namesZh: "纳米", namesEn: "nanometer" },
            inch: { value: 0.0254, symbol: "in", namesZh: "英寸", namesEn: "inch" },
            foot: { value: 0.3048, symbol: "ft", namesZh: "英尺", namesEn: "foot" },
            yard: { value: 0.9144, symbol: "yd", namesZh: "码", namesEn: "yard" },
            mile: { value: 1609.344, symbol: "mi", namesZh: "英里", namesEn: "mile" },
            nauticalMile: { value: 1852, symbol: "nmi", namesZh: "海里", namesEn: "nautical mile" },
        },
        description: {
            zh: "长度是空间中两点之间的距离。国际单位制中的基本长度单位是米(m)。各种长度单位广泛应用于日常生活、工程、科学和导航领域。",
            en: "Length is the distance between two points in space. The basic unit of length in the International System of Units (SI) is the meter (m). Various length units are widely used in everyday life, engineering, science, and navigation."
        }
    },
    area: {
        units: {
            // 基准单位: 平方米 (m²)
            squareMeter: { value: 1, symbol: "m²", namesZh: "平方米", namesEn: "square meter" },
            squareKilometer: { value: 1000000, symbol: "km²", namesZh: "平方千米", namesEn: "square kilometer" },
            squareCentimeter: { value: 0.0001, symbol: "cm²", namesZh: "平方厘米", namesEn: "square centimeter" },
            squareMillimeter: { value: 0.000001, symbol: "mm²", namesZh: "平方毫米", namesEn: "square millimeter" },
            squareInch: { value: 0.00064516, symbol: "in²", namesZh: "平方英寸", namesEn: "square inch" },
            squareFoot: { value: 0.09290304, symbol: "ft²", namesZh: "平方英尺", namesEn: "square foot" },
            squareYard: { value: 0.83612736, symbol: "yd²", namesZh: "平方码", namesEn: "square yard" },
            squareMile: { value: 2589988.11, symbol: "mi²", namesZh: "平方英里", namesEn: "square mile" },
            acre: { value: 4046.8564224, symbol: "ac", namesZh: "英亩", namesEn: "acre" },
            hectare: { value: 10000, symbol: "ha", namesZh: "公顷", namesEn: "hectare" },
        },
        description: {
            zh: "面积是二维空间中一个区域所覆盖的大小。国际单位制中的面积单位是平方米(m²)。面积单位用于测量土地、建筑物表面以及几何形状的大小。",
            en: "Area is the size of a surface in two-dimensional space. The SI unit of area is the square meter (m²). Area units are used to measure land, building surfaces, and the size of geometric shapes."
        }
    },
    volume: {
        units: {
            // 基准单位: 立方米 (m³)
            cubicMeter: { value: 1, symbol: "m³", namesZh: "立方米", namesEn: "cubic meter" },
            liter: { value: 0.001, symbol: "L", namesZh: "升", namesEn: "liter" },
            milliliter: { value: 0.000001, symbol: "mL", namesZh: "毫升", namesEn: "milliliter" },
            cubicCentimeter: { value: 0.000001, symbol: "cm³", namesZh: "立方厘米", namesEn: "cubic centimeter" },
            cubicMillimeter: { value: 1e-9, symbol: "mm³", namesZh: "立方毫米", namesEn: "cubic millimeter" },
            cubicInch: { value: 0.000016387064, symbol: "in³", namesZh: "立方英寸", namesEn: "cubic inch" },
            cubicFoot: { value: 0.028316846592, symbol: "ft³", namesZh: "立方英尺", namesEn: "cubic foot" },
            cubicYard: { value: 0.764554857984, symbol: "yd³", namesZh: "立方码", namesEn: "cubic yard" },
            usGallon: { value: 0.003785411784, symbol: "gal (US)", namesZh: "美制加仑", namesEn: "US gallon" },
            imperialGallon: { value: 0.00454609, symbol: "gal (UK)", namesZh: "英制加仑", namesEn: "Imperial gallon" },
            usFluidOunce: { value: 0.0000295735296, symbol: "fl oz (US)", namesZh: "美制液量盎司", namesEn: "US fluid ounce" },
            imperialFluidOunce: { value: 0.0000284130625, symbol: "fl oz (UK)", namesZh: "英制液量盎司", namesEn: "Imperial fluid ounce" },
            usQuart: { value: 0.000946352946, symbol: "qt (US)", namesZh: "美制夸脱", namesEn: "US quart" },
            imperialQuart: { value: 0.0011365225, symbol: "qt (UK)", namesZh: "英制夸脱", namesEn: "Imperial quart" },
        },
        description: {
            zh: "体积是三维空间中一个物体或区域所占据的空间量。国际单位制中的体积单位是立方米(m³)。体积单位用于测量容器、液体、气体和固体物体的容量。",
            en: "Volume is the amount of space occupied by a three-dimensional object or region. The SI unit of volume is the cubic meter (m³). Volume units are used to measure the capacity of containers, liquids, gases, and solid objects."
        }
    },
    weight: {
        units: {
            // 基准单位: 千克 (kg)
            kilogram: { value: 1, symbol: "kg", namesZh: "千克", namesEn: "kilogram" },
            gram: { value: 0.001, symbol: "g", namesZh: "克", namesEn: "gram" },
            milligram: { value: 0.000001, symbol: "mg", namesZh: "毫克", namesEn: "milligram" },
            metricTon: { value: 1000, symbol: "t", namesZh: "公吨", namesEn: "metric ton" },
            pound: { value: 0.45359237, symbol: "lb", namesZh: "磅", namesEn: "pound" },
            ounce: { value: 0.028349523125, symbol: "oz", namesZh: "盎司", namesEn: "ounce" },
            stone: { value: 6.35029318, symbol: "st", namesZh: "英石", namesEn: "stone" },
            usTon: { value: 907.18474, symbol: "ton (US)", namesZh: "美制吨", namesEn: "US ton" },
            imperialTon: { value: 1016.0469088, symbol: "ton (UK)", namesZh: "英制吨", namesEn: "Imperial ton" },
            carat: { value: 0.0002, symbol: "ct", namesZh: "克拉", namesEn: "carat" },
        },
        description: {
            zh: "质量是物体所含物质的量，代表物体的惯性。国际单位制中的基本质量单位是千克(kg)。重量是质量在重力作用下产生的力，但在日常使用中，重量和质量的单位常被混用。",
            en: "Mass is the amount of matter in an object, representing its inertia. The basic unit of mass in the SI is the kilogram (kg). Weight is the force exerted on mass due to gravity, but in everyday use, weight and mass units are often used interchangeably."
        }
    },
    temperature: {
        units: {
            // 特殊单位，需要特殊转换公式
            celsius: { value: "special", symbol: "°C", namesZh: "摄氏度", namesEn: "Celsius" },
            fahrenheit: { value: "special", symbol: "°F", namesZh: "华氏度", namesEn: "Fahrenheit" },
            kelvin: { value: "special", symbol: "K", namesZh: "开尔文", namesEn: "Kelvin" },
        },
        description: {
            zh: "温度是物体热量的度量，表示分子热运动的剧烈程度。常用的温度标准包括摄氏度(°C)、华氏度(°F)和开尔文(K)。开尔文是国际单位制中的温度单位。",
            en: "Temperature is a measure of the heat energy in an object, indicating the intensity of molecular thermal motion. Common temperature scales include Celsius (°C), Fahrenheit (°F), and Kelvin (K). Kelvin is the SI unit of temperature."
        }
    },
    pressure: {
        units: {
            // 基准单位: 帕斯卡 (Pa)
            pascal: { value: 1, symbol: "Pa", namesZh: "帕斯卡", namesEn: "pascal" },
            kilopascal: { value: 1000, symbol: "kPa", namesZh: "千帕", namesEn: "kilopascal" },
            megapascal: { value: 1000000, symbol: "MPa", namesZh: "兆帕", namesEn: "megapascal" },
            bar: { value: 100000, symbol: "bar", namesZh: "巴", namesEn: "bar" },
            millibar: { value: 100, symbol: "mbar", namesZh: "毫巴", namesEn: "millibar" },
            atmosphere: { value: 101325, symbol: "atm", namesZh: "标准大气压", namesEn: "atmosphere" },
            torr: { value: 133.322, symbol: "Torr", namesZh: "托", namesEn: "torr" },
            poundPerSquareInch: { value: 6894.75729, symbol: "psi", namesZh: "磅/平方英寸", namesEn: "pound per square inch" },
            inchOfMercury: { value: 3386.389, symbol: "inHg", namesZh: "英寸汞柱", namesEn: "inch of mercury" },
            millimeterOfMercury: { value: 133.322, symbol: "mmHg", namesZh: "毫米汞柱", namesEn: "millimeter of mercury" },
        },
        description: {
            zh: "压力是作用在单位面积上的力。国际单位制中的压力单位是帕斯卡(Pa)，等于每平方米一牛顿的力。压力单位在流体力学、气象学和工程学等领域广泛应用。",
            en: "Pressure is the force applied per unit area. The SI unit of pressure is the pascal (Pa), equal to one newton per square meter. Pressure units are widely used in fluid dynamics, meteorology, and engineering."
        }
    },
    energy: {
        units: {
            // 基准单位: 焦耳 (J)
            joule: { value: 1, symbol: "J", namesZh: "焦耳", namesEn: "joule" },
            kilojoule: { value: 1000, symbol: "kJ", namesZh: "千焦", namesEn: "kilojoule" },
            calorie: { value: 4.184, symbol: "cal", namesZh: "卡路里", namesEn: "calorie" },
            kilocalorie: { value: 4184, symbol: "kcal", namesZh: "千卡", namesEn: "kilocalorie" },
            wattHour: { value: 3600, symbol: "Wh", namesZh: "瓦时", namesEn: "watt-hour" },
            kilowattHour: { value: 3600000, symbol: "kWh", namesZh: "千瓦时", namesEn: "kilowatt-hour" },
            electronvolt: { value: 1.602176634e-19, symbol: "eV", namesZh: "电子伏特", namesEn: "electronvolt" },
            britishThermalUnit: { value: 1055.06, symbol: "BTU", namesZh: "英热单位", namesEn: "British thermal unit" },
            footPound: { value: 1.3558179483314, symbol: "ft⋅lbf", namesZh: "英尺·磅", namesEn: "foot-pound" },
        },
        description: {
            zh: "能量是执行工作或产生热量的能力。国际单位制中的能量单位是焦耳(J)。功率是单位时间内完成的工作或传递的能量，单位是瓦特(W)，等于每秒一焦耳。",
            en: "Energy is the capacity to do work or produce heat. The SI unit of energy is the joule (J). Power is the rate at which work is done or energy is transferred, measured in watts (W), equal to one joule per second."
        }
    },
    speed: {
        units: {
            // 基准单位: 米/秒 (m/s)
            meterPerSecond: { value: 1, symbol: "m/s", namesZh: "米/秒", namesEn: "meter per second" },
            kilometerPerHour: { value: 0.2777777778, symbol: "km/h", namesZh: "千米/小时", namesEn: "kilometer per hour" },
            milePerHour: { value: 0.44704, symbol: "mph", namesZh: "英里/小时", namesEn: "mile per hour" },
            footPerSecond: { value: 0.3048, symbol: "ft/s", namesZh: "英尺/秒", namesEn: "foot per second" },
            knot: { value: 0.5144444444, symbol: "kn", namesZh: "节", namesEn: "knot" },
        },
        description: {
            zh: "速度是物体位移变化的时间率，表示物体运动的快慢。国际单位制中的速度单位是米/秒(m/s)。不同的速度单位常用于不同的领域，如交通、航海和航空等。",
            en: "Speed is the rate of change of displacement of an object, indicating how fast an object is moving. The SI unit of speed is meters per second (m/s). Different speed units are commonly used in different fields such as transportation, maritime navigation, and aviation."
        }
    },
    time: {
        units: {
            // 基准单位: 秒 (s)
            second: { value: 1, symbol: "s", namesZh: "秒", namesEn: "second" },
            millisecond: { value: 0.001, symbol: "ms", namesZh: "毫秒", namesEn: "millisecond" },
            microsecond: { value: 0.000001, symbol: "µs", namesZh: "微秒", namesEn: "microsecond" },
            nanosecond: { value: 1e-9, symbol: "ns", namesZh: "纳秒", namesEn: "nanosecond" },
            minute: { value: 60, symbol: "min", namesZh: "分钟", namesEn: "minute" },
            hour: { value: 3600, symbol: "h", namesZh: "小时", namesEn: "hour" },
            day: { value: 86400, symbol: "d", namesZh: "天", namesEn: "day" },
            week: { value: 604800, symbol: "wk", namesZh: "周", namesEn: "week" },
            month: { value: 2592000, symbol: "mo", namesZh: "月(30天)", namesEn: "month (30 days)" },
            year: { value: 31536000, symbol: "yr", namesZh: "年(365天)", namesEn: "year (365 days)" },
        },
        description: {
            zh: "时间是事件发生的顺序和持续的量度。国际单位制中的基本时间单位是秒(s)。时间单位用于测量事件的持续时间、频率和间隔。",
            en: "Time is the measure of the sequence and duration of events. The basic unit of time in the SI is the second (s). Time units are used to measure the duration, frequency, and intervals of events."
        }
    },
    density: {
        units: {
            // 基准单位: 千克/立方米 (kg/m³)
            kilogramPerCubicMeter: { value: 1, symbol: "kg/m³", namesZh: "千克/立方米", namesEn: "kilogram per cubic meter" },
            gramPerCubicCentimeter: { value: 1000, symbol: "g/cm³", namesZh: "克/立方厘米", namesEn: "gram per cubic centimeter" },
            kilogramPerLiter: { value: 1000, symbol: "kg/L", namesZh: "千克/升", namesEn: "kilogram per liter" },
            gramPerMilliliter: { value: 1000, symbol: "g/mL", namesZh: "克/毫升", namesEn: "gram per milliliter" },
            poundPerCubicFoot: { value: 16.01846337, symbol: "lb/ft³", namesZh: "磅/立方英尺", namesEn: "pound per cubic foot" },
            poundPerCubicInch: { value: 27679.9047, symbol: "lb/in³", namesZh: "磅/立方英寸", namesEn: "pound per cubic inch" },
            poundPerGallon: { value: 119.8264273, symbol: "lb/gal", namesZh: "磅/加仑", namesEn: "pound per gallon" },
        },
        description: {
            zh: "密度是物质的质量与体积之比。国际单位制中的密度单位是千克/立方米(kg/m³)。密度用于表征物质的紧密程度，是物质的重要物理性质。",
            en: "Density is the mass of a substance per unit volume. The SI unit of density is kilograms per cubic meter (kg/m³). Density characterizes how closely packed a substance is and is an important physical property of matter."
        }
    },
    angle: {
        units: {
            // 基准单位: 弧度 (rad)
            radian: { value: 1, symbol: "rad", namesZh: "弧度", namesEn: "radian" },
            degree: { value: 0.0174532925, symbol: "°", namesZh: "度", namesEn: "degree" },
            minute: { value: 0.000290888209, symbol: "′", namesZh: "分", namesEn: "minute" },
            second: { value: 0.00000484813681, symbol: "″", namesZh: "秒", namesEn: "second" },
            gradian: { value: 0.015707963267949, symbol: "grad", namesZh: "梯度", namesEn: "gradian" },
            revolution: { value: 6.28318530717959, symbol: "rev", namesZh: "周", namesEn: "revolution" },
        },
        description: {
            zh: "角度是两条相交线或平面之间的旋转量。国际单位制中的角度单位是弧度(rad)。不同的角度单位广泛应用于几何学、三角学、导航和工程等领域。",
            en: "Angle is the amount of rotation between two intersecting lines or planes. The SI unit of angle is the radian (rad). Different angle units are widely used in geometry, trigonometry, navigation, and engineering."
        }
    },
};

// 全局变量
let currentLanguage = 'zh'; // 默认语言
let currentCategory = 'length'; // 默认类别
let favorites = []; // 收藏夹
let history = []; // 历史记录

// DOM 元素
const langToggle = document.getElementById('lang-toggle');
const unitSearch = document.getElementById('unit-search');
const searchBtn = document.getElementById('search-btn');
const categoryList = document.querySelector('.category-list');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const swapUnitsBtn = document.getElementById('swap-units');
const inputValue = document.getElementById('input-value');
const resultValue = document.getElementById('result-value');
const copyResultBtn = document.getElementById('copy-result');
const addFavoriteBtn = document.getElementById('add-favorite');
const clearHistoryBtn = document.getElementById('clear-history');
const favoritesList = document.getElementById('favorites-list');
const historyList = document.getElementById('history-list');
const formulaDisplay = document.getElementById('formula-display');
const unitDescription = document.getElementById('unit-description');

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储加载收藏夹和历史记录
    loadFavoritesFromStorage();
    loadHistoryFromStorage();
    
    // 初始化页面
    setLanguage(currentLanguage);
    initializeCategorySelection();
    initializeEventListeners();
    loadCategory(currentCategory);
});

// 初始化事件监听器
function initializeEventListeners() {
    // 语言切换
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        setLanguage(currentLanguage);
        loadCategory(currentCategory, true); // 重新加载当前类别但保持单位选择
    });
    
    // 类别切换
    categoryList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category !== currentCategory) {
                currentCategory = category;
                loadCategory(currentCategory);
                
                // 更新活动类别样式
                categoryList.querySelectorAll('li').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 单位搜索
    searchBtn.addEventListener('click', searchUnits);
    unitSearch.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchUnits();
        }
    });
    
    // 转换单位和输入值
    fromUnitSelect.addEventListener('change', convert);
    toUnitSelect.addEventListener('change', convert);
    inputValue.addEventListener('input', convert);
    
    // 交换单位
    swapUnitsBtn.addEventListener('click', swapUnits);
    
    // 复制结果
    copyResultBtn.addEventListener('click', copyResult);
    
    // 收藏夹管理
    addFavoriteBtn.addEventListener('click', toggleFavorite);
    
    // 清除历史记录
    clearHistoryBtn.addEventListener('click', clearHistory);
}

// 设置页面语言
function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    langToggle.setAttribute('data-lang', lang);
    
    // 更新页面文本
    document.querySelector('.logo h1').textContent = translations[lang].appTitle;
    document.getElementById('input-label').textContent = translations[lang].inputValue;
    document.getElementById('input-value').placeholder = translations[lang].inputPlaceholder;
    document.getElementById('from-label').textContent = translations[lang].from;
    document.getElementById('to-label').textContent = translations[lang].to;
    document.getElementById('result-label').textContent = translations[lang].resultLabel;
    document.getElementById('copy-text').textContent = translations[lang].copy;
    document.getElementById('favorites-title').textContent = translations[lang].favorites;
    document.getElementById('history-title').textContent = translations[lang].history;
    document.getElementById('clear-text').textContent = translations[lang].clear;
    document.getElementById('formula-title').textContent = translations[lang].formulaTitle;
    document.getElementById('unit-info-title').textContent = translations[lang].unitInfoTitle;
    document.getElementById('footer-text').textContent = translations[lang].footerText;
    unitSearch.placeholder = translations[lang].searchPlaceholder;
    
    // 更新类别名称
    categoryList.querySelectorAll('li').forEach(item => {
        const category = item.getAttribute('data-category');
        const nameSpan = item.querySelector('.category-name');
        nameSpan.textContent = translations[lang][category];
    });
    
    // 更新收藏按钮文本
    updateFavoriteButtonText();
    
    // 更新当前类别标题
    updateCategoryTitle();
    
    // 更新收藏夹和历史记录
    renderFavorites();
    renderHistory();
}

// 初始化类别选择
function initializeCategorySelection() {
    categoryList.querySelectorAll('li').forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === currentCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 加载指定类别的单位
function loadCategory(category, keepSelection = false) {
    currentCategory = category;
    updateCategoryTitle();
    
    // 获取当前选中的单位值（如果需要保持选择）
    let currentFromUnit, currentToUnit;
    if (keepSelection) {
        currentFromUnit = fromUnitSelect.value;
        currentToUnit = toUnitSelect.value;
    }
    
    // 清空单位选择下拉菜单
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
    
    // 填充单位选择下拉菜单
    const units = unitData[category].units;
    for (const unit in units) {
        const unitInfo = units[unit];
        const optionTextFrom = currentLanguage === 'zh' ? 
            `${unitInfo.namesZh} (${unitInfo.symbol})` : 
            `${unitInfo.namesEn} (${unitInfo.symbol})`;
        const optionTextTo = optionTextFrom;
        
        const optionFrom = new Option(optionTextFrom, unit);
        const optionTo = new Option(optionTextTo, unit);
        
        fromUnitSelect.add(optionFrom);
        toUnitSelect.add(optionTo);
    }
    
    // 如果需要保持选择且选项存在，则设置为之前的选择
    if (keepSelection && Object.keys(units).includes(currentFromUnit) && Object.keys(units).includes(currentToUnit)) {
        fromUnitSelect.value = currentFromUnit;
        toUnitSelect.value = currentToUnit;
    } else {
        // 否则设置默认选择（第一个和第二个选项，如果有）
        if (fromUnitSelect.options.length > 0) {
            fromUnitSelect.selectedIndex = 0;
        }
        if (toUnitSelect.options.length > 1) {
            toUnitSelect.selectedIndex = 1;
        } else if (toUnitSelect.options.length > 0) {
            toUnitSelect.selectedIndex = 0;
        }
    }
    
    // 更新单位描述
    unitDescription.textContent = unitData[category].description[currentLanguage];
    
    // 设置初始转换公式
    updateConversionFormula();
    
    // 检查当前转换是否在收藏夹中
    checkIfFavorited();
    
    // 执行转换
    convert();
}

// 更新类别标题
function updateCategoryTitle() {
    const titleKey = currentCategory + 'Conversion';
    document.getElementById('current-category-title').textContent = translations[currentLanguage][titleKey];
}

// 搜索单位
function searchUnits() {
    const searchTerm = unitSearch.value.trim().toLowerCase();
    if (!searchTerm) return;
    
    // 用于存储可能的匹配及其匹配分数
    let possibleMatches = [];
    
    // 搜索所有类别中的单位
    for (const category in unitData) {
        const units = unitData[category].units;
        for (const unit in units) {
            const unitInfo = units[unit];
            
            // 获取单位的各种名称和符号
            const namesZh = unitInfo.namesZh.toLowerCase();
            const namesEn = unitInfo.namesEn.toLowerCase();
            const symbol = unitInfo.symbol.toLowerCase();
            
            // 计算匹配得分
            let score = 0;
            
            // 精确匹配得分最高
            if (namesZh === searchTerm) {
                score = 100; // 中文名称精确匹配
            } else if (namesEn === searchTerm) {
                score = 90; // 英文名称精确匹配
            } else if (symbol === searchTerm) {
                score = 80; // 符号精确匹配
            }
            // 包含关系得分较低
            else if (namesZh.includes(searchTerm)) {
                score = 70 + (searchTerm.length / namesZh.length) * 20; // 中文名称包含搜索词
            } else if (searchTerm.includes(namesZh)) {
                score = 60 + (namesZh.length / searchTerm.length) * 20; // 搜索词包含中文名称
            } else if (namesEn.includes(searchTerm)) {
                score = 50 + (searchTerm.length / namesEn.length) * 20; // 英文名称包含搜索词
            } else if (searchTerm.includes(namesEn)) {
                score = 40 + (namesEn.length / searchTerm.length) * 20; // 搜索词包含英文名称
            } else if (symbol.includes(searchTerm)) {
                score = 30 + (searchTerm.length / symbol.length) * 20; // 符号包含搜索词
            } else if (searchTerm.includes(symbol)) {
                score = 20 + (symbol.length / searchTerm.length) * 20; // 搜索词包含符号
            }
            
            // 特殊处理：根据类别关键词加分
            if (score > 0) {
                // 如果搜索词包含类别关键词，增加分数
                if (category === 'area' && (searchTerm.includes('平方') || searchTerm.includes('square'))) {
                    score += 25;
                } else if (category === 'volume' && (searchTerm.includes('立方') || searchTerm.includes('cubic') || searchTerm.includes('升') || searchTerm.includes('liter'))) {
                    score += 25;
                } else if (category === 'weight' && (searchTerm.includes('重') || searchTerm.includes('质量') || searchTerm.includes('weight') || searchTerm.includes('mass'))) {
                    score += 25;
                } else if (category === 'temperature' && (searchTerm.includes('温') || searchTerm.includes('temp'))) {
                    score += 25;
                } else if (category === 'pressure' && (searchTerm.includes('压') || searchTerm.includes('press'))) {
                    score += 25;
                } else if (category === 'energy' && (searchTerm.includes('能') || searchTerm.includes('能量') || searchTerm.includes('功率') || searchTerm.includes('energy') || searchTerm.includes('power'))) {
                    score += 25;
                } else if (category === 'speed' && (searchTerm.includes('速') || searchTerm.includes('速度') || searchTerm.includes('speed'))) {
                    score += 25;
                } else if (category === 'time' && (searchTerm.includes('时') || searchTerm.includes('时间') || searchTerm.includes('time'))) {
                    score += 25;
                } else if (category === 'density' && (searchTerm.includes('密') || searchTerm.includes('密度') || searchTerm.includes('density'))) {
                    score += 25;
                } else if (category === 'angle' && (searchTerm.includes('角') || searchTerm.includes('角度') || searchTerm.includes('angle'))) {
                    score += 25;
                }
            }
            
            // 如果有得分，加入可能的匹配
            if (score > 0) {
                possibleMatches.push({
                    category,
                    unit,
                    score,
                    info: unitInfo
                });
            }
        }
    }
    
    // 如果有匹配，按得分降序排序并选择最高匹配
    if (possibleMatches.length > 0) {
        possibleMatches.sort((a, b) => b.score - a.score);
        const bestMatch = possibleMatches[0];
        
        // 如果找到匹配，切换到对应类别
        if (bestMatch.category !== currentCategory) {
            currentCategory = bestMatch.category;
            
            // 更新活动类别样式
            categoryList.querySelectorAll('li').forEach(el => {
                if (el.getAttribute('data-category') === bestMatch.category) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
            
            // 加载类别
            loadCategory(bestMatch.category, false);
        }
        
        // 选择找到的单位
        fromUnitSelect.value = bestMatch.unit;
        
        // 执行转换
        convert();
        
        // 提供反馈
        unitSearch.value = '';
        unitSearch.placeholder = `找到: ${bestMatch.info.namesZh} (${bestMatch.info.symbol})`;
        setTimeout(() => {
            unitSearch.placeholder = translations[currentLanguage].searchPlaceholder;
        }, 2000);
        
        return;
    }
    
    // 如果没有找到匹配项，显示提示
    unitSearch.value = '';
    unitSearch.placeholder = `未找到: ${searchTerm}`;
    setTimeout(() => {
        unitSearch.placeholder = translations[currentLanguage].searchPlaceholder;
    }, 2000);
}

// 温度转换函数
function convertTemperature(value, fromUnit, toUnit) {
    // 先转换为开尔文
    let kelvin;
    if (fromUnit === 'celsius') {
        kelvin = value + 273.15;
    } else if (fromUnit === 'fahrenheit') {
        kelvin = (value - 32) * 5/9 + 273.15;
    } else { // 开尔文
        kelvin = value;
    }
    
    // 从开尔文转换为目标单位
    if (toUnit === 'celsius') {
        return kelvin - 273.15;
    } else if (toUnit === 'fahrenheit') {
        return (kelvin - 273.15) * 9/5 + 32;
    } else { // 开尔文
        return kelvin;
    }
}

// 执行单位转换
function convert() {
    const value = parseFloat(inputValue.value);
    
    if (isNaN(value)) {
        resultValue.textContent = translations[currentLanguage].noResult;
        return;
    }
    
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    
    // 计算转换结果
    let result;
    
    // 温度需要特殊处理
    if (category === 'temperature') {
        result = convertTemperature(value, fromUnit, toUnit);
    } else {
        // 其他单位使用转换因子 - 修正转换公式
        const fromValue = unitData[category].units[fromUnit].value;
        const toValue = unitData[category].units[toUnit].value;
        
        // 正确的转换公式：先将输入值转换为基准单位，再从基准单位转换为目标单位
        result = value * fromValue / toValue;
    }
    
    // 根据精度显示结果
    let displayResult;
    if (Math.abs(result) >= 1e6 || (Math.abs(result) < 1e-6 && result !== 0)) {
        // 使用科学计数法
        displayResult = result.toExponential(6);
    } else {
        // 使用固定小数位
        // 判断是否需要小数点
        if (Number.isInteger(result)) {
            displayResult = result.toString();
        } else {
            // 根据数值大小确定合适的小数位数
            const magnitude = Math.abs(result);
            let decimalPlaces;
            
            if (magnitude >= 100) decimalPlaces = 2;
            else if (magnitude >= 10) decimalPlaces = 3;
            else if (magnitude >= 1) decimalPlaces = 4;
            else if (magnitude >= 0.1) decimalPlaces = 5;
            else if (magnitude >= 0.01) decimalPlaces = 6;
            else decimalPlaces = 8;
            
            displayResult = result.toFixed(decimalPlaces).replace(/\.?0+$/, '');
            
            // 去除末尾的0和可能的小数点
            if (displayResult.includes('.')) {
                displayResult = displayResult.replace(/\.?0+$/, '');
                // 如果去除末尾的0后只剩小数点，也要去除小数点
                if (displayResult.endsWith('.')) {
                    displayResult = displayResult.slice(0, -1);
                }
            }
        }
    }
    
    // 显示结果
    resultValue.textContent = displayResult;
    
    // 更新公式显示
    updateConversionFormula();
    
    // 检查是否为收藏项
    checkIfFavorited();
    
    // 添加到历史记录
    addToHistory(category, fromUnit, toUnit, displayResult);
}

// 更新公式显示
function updateConversionFormula() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    
    // 获取单位信息
    const fromUnitInfo = unitData[category].units[fromUnit];
    const toUnitInfo = unitData[category].units[toUnit];
    
    let formulaText = '';
    
    // 温度需要特殊处理
    if (category === 'temperature') {
        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n°F = (°C × 9/5) + 32`;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n°C = (°F - 32) × 5/9`;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\nK = °C + 273.15`;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n°C = K - 273.15`;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\nK = (°F - 32) × 5/9 + 273.15`;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n°F = (K - 273.15) × 9/5 + 32`;
        } else {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n相同单位，值不变`;
        }
    } else {
        // 其他单位使用转换因子
        const fromValue = unitData[category].units[fromUnit].value;
        const toValue = unitData[category].units[toUnit].value;
        
        if (fromUnit === toUnit) {
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n相同单位，值不变`;
        } else {
            const conversionFactor = fromValue / toValue;
            const readableFactor = conversionFactor.toExponential(6);
            
            formulaText = `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol}) → ${toUnitInfo.namesZh} (${toUnitInfo.symbol}):\n${toUnitInfo.symbol} = ${fromUnitInfo.symbol} × ${readableFactor}`;
            
            // 对于常见的转换添加更友好的公式表示
            if (category === 'length') {
                if (fromUnit === 'meter' && toUnit === 'centimeter') {
                    formulaText += '\n或: 1米 = 100厘米';
                } else if (fromUnit === 'centimeter' && toUnit === 'meter') {
                    formulaText += '\n或: 1厘米 = 0.01米';
                } else if (fromUnit === 'meter' && toUnit === 'kilometer') {
                    formulaText += '\n或: 1米 = 0.001千米';
                } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
                    formulaText += '\n或: 1千米 = 1000米';
                } else if (fromUnit === 'inch' && toUnit === 'centimeter') {
                    formulaText += '\n或: 1英寸 ≈ 2.54厘米';
                } else if (fromUnit === 'foot' && toUnit === 'meter') {
                    formulaText += '\n或: 1英尺 ≈ 0.3048米';
                }
            }
        }
    }
    
    // 更新公式显示
    formulaDisplay.textContent = formulaText;
}

// 检查当前转换是否在收藏夹中
function checkIfFavorited() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    
    // 构建转换结果的唯一标识
    const resultIdentifier = `${category}-${fromUnit}-${toUnit}`;
    
    // 检查是否在收藏夹中
    const isFavorited = favorites.includes(resultIdentifier);
    
    // 更新收藏按钮文本
    updateFavoriteButtonText();
}

// 更新收藏按钮文本
function updateFavoriteButtonText() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    
    // 构建转换结果的唯一标识
    const resultIdentifier = `${category}-${fromUnit}-${toUnit}`;
    
    // 检查是否在收藏夹中
    const isFavorited = favorites.includes(resultIdentifier);
    
    // 更新收藏按钮文本和图标
    const favoriteIcon = addFavoriteBtn.querySelector('i');
    const favoriteText = addFavoriteBtn.querySelector('span');
    
    if (isFavorited) {
        favoriteIcon.className = 'fas fa-star'; // 实心星星
        favoriteText.textContent = translations[currentLanguage].removeFromFavorites;
    } else {
        favoriteIcon.className = 'far fa-star'; // 空心星星
        favoriteText.textContent = translations[currentLanguage].addToFavorites;
    }
}

// 收藏或取消收藏
function toggleFavorite() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    
    // 构建转换结果的唯一标识
    const resultIdentifier = `${category}-${fromUnit}-${toUnit}`;
    
    // 检查是否在收藏夹中
    const isFavorited = favorites.includes(resultIdentifier);
    
    // 更新收藏夹
    if (isFavorited) {
        favorites = favorites.filter(item => item !== resultIdentifier);
        // 显示移除提示
        alert(translations[currentLanguage].removedFromFavorites);
    } else {
        favorites.push(resultIdentifier);
        // 显示添加提示
        alert(translations[currentLanguage].addedToFavorites);
    }
    
    // 更新收藏按钮文本
    updateFavoriteButtonText();
    
    // 更新收藏夹显示
    renderFavorites();
    
    // 保存收藏夹到本地存储
    saveFavoritesToStorage();
}

// 清除历史记录
function clearHistory() {
    history = [];
    renderHistory();
    saveHistoryToStorage();
}

// 渲染收藏夹
function renderFavorites() {
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.classList.add('empty-favorites');
        emptyItem.textContent = currentLanguage === 'zh' ? '暂无收藏项' : 'No favorites yet';
        favoritesList.appendChild(emptyItem);
        return;
    }
    
    favorites.forEach(item => {
        const [category, fromUnit, toUnit] = item.split('-');
        
        // 检查单位是否有效
        if (!unitData[category]?.units[fromUnit] || !unitData[category]?.units[toUnit]) {
            return; // 跳过无效的收藏项
        }
        
        const fromUnitInfo = unitData[category].units[fromUnit];
        const toUnitInfo = unitData[category].units[toUnit];
        
        const fromText = currentLanguage === 'zh' ? 
            `${fromUnitInfo.namesZh}` : 
            `${fromUnitInfo.namesEn}`;
            
        const toText = currentLanguage === 'zh' ? 
            `${toUnitInfo.namesZh}` : 
            `${toUnitInfo.namesEn}`;
            
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${fromText} → ${toText}</span>
            <button class="remove-favorite"><i class="fas fa-times"></i></button>
        `;
        
        // 添加点击事件加载此转换
        li.addEventListener('click', (e) => {
            // 如果点击的是删除按钮，则不加载转换
            if (e.target.closest('.remove-favorite')) {
                e.stopPropagation();
                // 从收藏夹中移除
                favorites = favorites.filter(favItem => favItem !== item);
                renderFavorites();
                saveFavoritesToStorage();
                
                // 如果当前正在显示的就是此单位转换，更新收藏按钮状态
                if (currentCategory === category && 
                    fromUnitSelect.value === fromUnit && 
                    toUnitSelect.value === toUnit) {
                    updateFavoriteButtonText();
                }
                
                return;
            }
            
            // 否则加载此转换
            currentCategory = category;
            
            // 更新活动类别样式
            categoryList.querySelectorAll('li').forEach(el => {
                if (el.getAttribute('data-category') === category) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
            
            // 加载类别并设置单位
            loadCategory(category, false);
            fromUnitSelect.value = fromUnit;
            toUnitSelect.value = toUnit;
            
            // 执行转换
            convert();
        });
        
        favoritesList.appendChild(li);
    });
}

// 渲染历史记录
function renderHistory() {
    historyList.innerHTML = '';
    
    history.forEach(item => {
        const [category, fromUnit, toUnit, result] = item;
        
        if (!unitData[category]?.units[fromUnit] || !unitData[category]?.units[toUnit]) {
            return; // 跳过无效的历史记录
        }
        
        const fromUnitInfo = unitData[category].units[fromUnit];
        const toUnitInfo = unitData[category].units[toUnit];
        
        const fromText = currentLanguage === 'zh' ? 
            `${fromUnitInfo.namesZh} (${fromUnitInfo.symbol})` : 
            `${fromUnitInfo.namesEn} (${fromUnitInfo.symbol})`;
            
        const toText = currentLanguage === 'zh' ? 
            `${toUnitInfo.namesZh} (${toUnitInfo.symbol})` : 
            `${toUnitInfo.namesEn} (${toUnitInfo.symbol})`;
            
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="history-item-value">${result}</div>
            <div class="history-item-units">${fromText} → ${toText}</div>
        `;
        
        // 添加点击事件加载此转换
        li.addEventListener('click', () => {
            currentCategory = category;
            
            // 更新活动类别样式
            categoryList.querySelectorAll('li').forEach(el => {
                if (el.getAttribute('data-category') === category) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
            
            // 加载类别并设置单位
            loadCategory(category, false);
            fromUnitSelect.value = fromUnit;
            toUnitSelect.value = toUnit;
            
            // 执行转换
            convert();
        });
        
        historyList.appendChild(li);
    });
}

// 保存收藏夹到本地存储
function saveFavoritesToStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 加载收藏夹
function loadFavoritesFromStorage() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        renderFavorites();
    }
}

// 保存历史记录到本地存储
function saveHistoryToStorage() {
    localStorage.setItem('history', JSON.stringify(history));
}

// 加载历史记录
function loadHistoryFromStorage() {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        renderHistory();
    }
}

// 交换单位
function swapUnits() {
    const temp = fromUnitSelect.value;
    fromUnitSelect.value = toUnitSelect.value;
    toUnitSelect.value = temp;
    convert();
}

// 复制结果
function copyResult() {
    const result = resultValue.textContent;
    navigator.clipboard.writeText(result).then(() => {
        alert(translations[currentLanguage].copied);
    }).catch(err => {
        console.error('无法复制结果: ', err);
    });
}

// 添加到历史记录
function addToHistory(category, fromUnit, toUnit, result) {
    // 构建历史记录项
    const historyItem = [category, fromUnit, toUnit, result];
    
    // 检查是否已存在相同的转换
    const existsIndex = history.findIndex(item => 
        item[0] === category && 
        item[1] === fromUnit && 
        item[2] === toUnit
    );
    
    if (existsIndex !== -1) {
        // 更新现有项
        history[existsIndex] = historyItem;
    } else {
        // 添加新项
        history.unshift(historyItem);
        
        // 保持历史记录不超过10项
        if (history.length > 10) {
            history.pop();
        }
    }
    
    // 渲染历史记录
    renderHistory();
    
    // 保存到本地存储
    saveHistoryToStorage();
}
