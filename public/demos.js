var FORMULA_DEMOS = [
  {"type": "database", "tests": [
    {"function": "DAVERAGE", "call": "DAVERAGE([['Height',18,12,13,14,9,8],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>13']])", "result": 12},
    {"function": "DCOUNT", "call": "DCOUNT([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 2},
    {"function": "DCOUNTA", "call": "DCOUNTA([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 1},
    {"function": "DGET", "call": "DGET([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>16']])", "result": 14},
    {"function": "DMAX", "call": "DMAX([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 14},
    {"function": "DMIN", "call": "DMIN([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 10},
    {"function": "DPRODUCT", "call": "DPRODUCT([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 140},
    {"function": "DSTDEV", "call": "DSTDEV([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10']])", "result": 2.8635642126552705},
    {"function": "DSTDEVP", "call": "DSTDEVP([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10']])", "result": 2.5612496949731396},
    {"function": "DSUM", "call": "DSUM([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 24},
    {"function": "DVAR", "call": "DVAR([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 8},
    {"function": "DVARP", "call": "DVARP([['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 'Yield', [['Height','>10'],['Age','>14']])", "result": 4}
  ]},
  {"type": "date", "tests": [
    {"function": "DATE", "call": "DATE(2008, 7, 8)", "result": "Tue Jul 08 2008 00:00:00 GMT-0700 (PDT)"},
    {"function": "DATEVALUE", "call": "DATEVALUE('8/22/2011')", "result": "Mon Aug 22 2011 00:00:00 GMT-0700 (PDT)"},
    {"function": "DAY", "call": "DAY('15-Apr-11')", "result": "15"},
    {"function": "DAYS", "call": "DAYS('3/15/11', '2/1/11')", "result": "42"},
    {"function": "DAYS360", "call": "DAYS360('1-Jan-11', '31-Dec-11')", "result": "360"},
    {"function": "EDATE", "call": "EDATE('1/15/11', -1)", "result": "Wed Dec 15 2010 00:00:00 GMT-0800 (PST)"},
    {"function": "EOMONTH", "call": "EOMONTH('1/1/11', -3)", "result": "Sun Oct 31 2010 00:00:00 GMT-0700 (PDT)"},
    {"function": "HOUR", "call": "HOUR('7/18/2011 7:45:00 AM')", "result": "7"},
    {"function": "MINUTE", "call": "MINUTE('2/1/2011 12:45:00 PM')", "result": "45"},
    {"function": "ISOWEEKNUM", "call": "ISOWEEKNUM('3/9/2012')", "result": "10"},
    {"function": "MONTH", "call": "MONTH('15-Apr-11')", "result": "4"},
    {"function": "NETWORKDAYS", "call": "NETWORKDAYS('10/1/2012', '3/1/2013', ['11/22/2012'])", "result": "109"},
    {"function": "NETWORKDAYSINTL", "call": "NETWORKDAYSINTL('1/1/2006', '2/1/2006', 7, ['1/2/2006'])", "result": "23"},
    {"function": "NOW", "call": "NOW()", "result": new Date(), "bypass": true},
    {"function": "SECOND", "call": "SECOND('2/1/2011 4:48:18 PM')", "result": "18"},
    {"function": "TIME", "call": "TIME(16, 48, 10)", "result": "0.7001157407407408"},
    {"function": "TIMEVALUE", "call": "TIMEVALUE('22-Aug-2011 6:35 AM')", "result": "0.2743055555555556"},
    {"function": "TODAY", "call": "TODAY()", "result": new Date(), "bypass": true},
    {"function": "WEEKDAY", "call": "WEEKDAY('2/14/2008', 3)", "result": "3"},
    {"function": "YEAR", "call": "YEAR('7/5/2008')", "result": "2008"},
    {"function": "WEEKNUM", "call": "WEEKNUM('3/9/2012', 2)", "result": "11"},
    {"function": "WORKDAY", "call": "WORKDAY('10/1/2008', 151, ['11/26/2008', '12/4/2008'])", "result": "Mon May 04 2009 00:00:00 GMT-0700 (PDT)"},
    {"function": "WORKDAYINTL", "call": "WORKDAYINTL('1/1/2012', 30, 17)", "result": "Sun Feb 05 2012 00:00:00 GMT-0800 (PST)"},
    {"function": "YEARFRAC", "call": "YEARFRAC('1/1/2012', '7/30/2012', 3)", "result": "0.5780821917808219"}
  ]},
  {"type": "financial", "tests": [
    {"function": "ACCRINT", "call": "ACCRINT('01/01/2011', '02/01/2011', '07/01/2014', 0.1, 1000, 1, 0)", "result": 350},
    {"function": "CUMIPMT", "call": "CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 0)", "result": -9916.77251395708},
    {"function": "CUMPRINC", "call": "CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 0)", "result": -614.0863271085149},
    {"function": "DB", "call": "DB(1000000, 100000, 6, 1, 6)", "result": 159500},
    {"function": "DDB", "call": "DDB(1000000, 100000, 6, 1, 1.5)", "result": 250000},
    {"function": "DOLLARDE", "call": "DOLLARDE(1.1, 16)", "result": 1.625},
    {"function": "DOLLARFR", "call": "DOLLARFR(1.625, 16)", "result": 1.1},
    {"function": "EFFECT", "call": "EFFECT(0.1, 4)", "result": 0.10381289062499977},
    {"function": "FV", "call": "FV('0.1/12', 10, -100, -1000, 0)", "result": 2124.874409194097},
    {"function": "FVSCHEDULE", "call": "FVSCHEDULE(100, [0.09,0.1,0.11])", "result": 133.08900000000003},
    {"function": "IPMT", "call": "IPMT('0.1/12', 6, '2*12', 100000, 1000000, 0)", "result": 928.8235718400465},
    {"function": "IRR", "call": "IRR([-75000,12000,15000,18000,21000,24000], 0.075)", "result": 0.05715142887178447},
    {"function": "ISPMT", "call": "ISPMT('0.1/12', 6, '2*12', 100000)", "result": -625},
    {"function": "MIRR", "call": "MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)", "result": 0.07971710360838036},
    {"function": "NOMINAL", "call": "NOMINAL(0.1, 4)", "result": 0.09645475633778045},
    {"function": "NPER", "call": "NPER('0.1/12', -100, -1000, 10000, 0)", "result": 63.39385422740764},
    {"function": "NPV", "call": "NPV(0.1, -10000, 2000, 4000, 8000)", "result": 1031.3503176012546},
    {"function": "PDURATION", "call": "PDURATION(0.1, 1000, 2000)", "result": 7.272540897341714},
    {"function": "PMT", "call": "PMT('0.1/12', '2*12', 100000, 1000000, 0)", "result": -42426.08563793503},
    {"function": "PPMT", "call": "PPMT('0.1/12', 6, '2*12', 100000, 1000000, 0)", "result": -43354.909209775076},
    {"function": "PV", "call": "PV('0.1/12', '2*12', 1000, 10000, 0)", "result": -29864.950264779152},
    {"function": "RATE", "call": "RATE('2*12', -1000, -10000, 100000, 0, 0.1)", "result": 0.06517891177181533},
  ]},
  {"type": "engineering", "tests": [
    {"function": "BIN2DEC", "call": "BIN2DEC(101010)", "result": 42},
    {"function": "BIN2HEX", "call": "BIN2HEX(101010)", "result": "2a"},
    {"function": "BIN2OCT", "call": "BIN2OCT(101010)", "result": "52"},
    {"function": "BITAND", "call": "BITAND(42, 24)", "result": 8},
    {"function": "BITLSHIFT", "call": "BITLSHIFT(42, 24)", "result": 704643072},
    {"function": "BITOR", "call": "BITOR(42, 24)", "result": 58},
    {"function": "BITRSHIFT", "call": "BITRSHIFT(42, 2)", "result": 10},
    {"function": "BITXOR", "call": "BITXOR(42, 24)", "result": 50},
    {"function": "COMPLEX", "call": "COMPLEX(3, 4)", "result": "3+4i"},
    {"function": "CONVERT", "call": "CONVERT(64, 'kibyte', 'bit')", "result": 524288},
    {"function": "DEC2BIN", "call": "DEC2BIN(42)", "result": "101010"},
    {"function": "DEC2HEX", "call": "DEC2HEX(42)", "result": "2a"},
    {"function": "DEC2OCT", "call": "DEC2OCT(42)", "result": "52"},
    {"function": "DELTA", "call": "DELTA(42, 42)", "result": 1},
    {"function": "ERF", "call": "ERF(1)", "result": 0.8427007929497149},
    {"function": "ERFC", "call": "ERFC(1)", "result": 0.1572992070502851},
    {"function": "GESTEP", "call": "GESTEP(42, 24)", "result": 1},
    {"function": "HEX2BIN", "call": "HEX2BIN('2a')", "result": "101010"},
    {"function": "HEX2DEC", "call": "HEX2DEC('2a')", "result": 42},
    {"function": "HEX2OCT", "call": "HEX2OCT('2a')", "result": "52"},
    {"function": "IMABS", "call": "IMABS('3+4i')", "result": 5},
    {"function": "IMAGINARY", "call": "IMAGINARY('3+4i')", "result": 4},
    {"function": "IMARGUMENT", "call": "IMARGUMENT('3+4i')", "result": 0.9272952180016122},
    {"function": "IMCONJUGATE", "call": "IMCONJUGATE('3+4i')", "result": "3-4i"},
    {"function": "IMCOS", "call": "IMCOS('1+i')", "result": "0.8337300251311491-0.9888977057628651i"},
    {"function": "IMCOSH", "call": "IMCOSH('1+i')", "result": "0.8337300251311491+0.9888977057628651i"},
    {"function": "IMCOT", "call": "IMCOT('1+i')", "result": "0.21762156185440265-0.8680141428959249i"},
    {"function": "IMCSC", "call": "IMCSC('1+i')", "result": "0.6215180171704283-0.3039310016284264i"},
    {"function": "IMCSCH", "call": "IMCSCH('1+i')", "result": "0.3039310016284264-0.6215180171704283i"},
    {"function": "IMDIV", "call": "IMDIV('1+2i', '3+4i')", "result": "0.44+0.08i"},
    {"function": "IMEXP", "call": "IMEXP('1+i')", "result": "1.4686939399158851+2.2873552871788423i"},
    {"function": "IMLN", "call": "IMLN('1+i')", "result": "0.3465735902799727+0.7853981633974483i"},
    {"function": "IMLOG10", "call": "IMLOG10('1+i')", "result": "0.1505149978319906+0.3410940884604603i"},
    {"function": "IMLOG2", "call": "IMLOG2('1+i')", "result": "0.5000000000000001+1.1330900354567985i"},
    {"function": "IMPOWER", "call": "IMPOWER('1+i', 2)", "result": "1.2246063538223775e-16+2.0000000000000004i"},
    {"function": "IMPRODUCT", "call": "IMPRODUCT('1+2i', '3+4i', '5+6i')", "result": "-85+20i"},
    {"function": "IMREAL", "call": "IMREAL('3+4i')", "result": 3},
    {"function": "IMSEC", "call": "IMSEC('1+i')", "result": "0.4983370305551868+0.591083841721045i"},
    {"function": "IMSECH", "call": "IMSECH('1+i')", "result": "0.4983370305551868-0.591083841721045i"},
    {"function": "IMSIN", "call": "IMSIN('1+i')", "result": "1.2984575814159773+0.6349639147847361i"},
    {"function": "IMSINH", "call": "IMSINH('1+i')", "result": "0.6349639147847361+1.2984575814159773i"},
    {"function": "IMSQRT", "call": "IMSQRT('1+i')", "result": "1.0986841134678098+0.45508986056222733i"},
    {"function": "IMSUB", "call": "IMSUB('3+4i', '1+2i')", "result": "2+2i"},
    {"function": "IMSUM", "call": "IMSUM('1+2i', '3+4i', '5+6i')", "result": "9+12i"},
    {"function": "IMTAN", "call": "IMTAN('1+i')", "result": "0.2717525853195117+1.0839233273386946i"},
    {"function": "OCT2BIN", "call": "OCT2BIN('52')", "result": "101010"},
    {"function": "OCT2DEC", "call": "OCT2DEC('52')", "result": 42},
    {"function": "OCT2HEX", "call": "OCT2HEX('52')", "result": "2a"}
  ]},
  {"type": "logical", "tests": [
    {"function": "AND", "call": "AND(true, false, true)", "result": false},
    {"function": "FALSE", "call": "FALSE()", "result": false},
    {"function": "IF", "call": "IF(true, 'Hello!', 'Goodbye!')", "result": "Hello!"},
    {"function": "IFERROR", "call": "IFERROR('#DIV/0!', 'Error')", "result": "Error"},
    {"function": "IFNA", "call": "IFNA('#N/A', 'Error')", "result": "Error"},
    {"function": "NOT", "call": "NOT(true)", "result": false},
    {"function": "OR", "call": "OR(true, false, true)", "result": true},
    {"function": "TRUE", "call": "TRUE()", "result": true},
    {"function": "XOR", "call": "XOR(true, false, true)", "result": false}
  ]},
  {"type": "math", "tests": [
    {"function": "ABS", "call": "ABS(-4)", "result": 4},
    {"function": "ACOS", "call": "ACOS(-0.5)", "result": 2.0943951023931957},
    {"function": "ACOSH", "call": "ACOSH(10)", "result": 2.993222846126381},
    {"function": "ACOT", "call": "ACOT(2)", "result": 0.46364760900080615},
    {"function": "ACOTH", "call": "ACOTH(6)", "result": 0.16823611831060645},
    {"function": "AGGREGATE", "call": "AGGREGATE(9, 4, [-5,15], [32,'Hello World!'])", "result": [10,32]},
    {"function": "ARABIC", "call": "ARABIC('MCMXII')", "result": 1912},
    {"function": "ASIN", "call": "ASIN(-0.5)", "result": -0.5235987755982988},
    {"function": "ASINH", "call": "ASINH(-2.5)", "result": -1.6472311463710965},
    {"function": "ATAN", "call": "ATAN(1)", "result": 0.7853981633974483},
    {"function": "ATAN2", "call": "ATAN2(-1, -1)", "result": -2.356194490192345},
    {"function": "ATANH", "call": "ATANH(-0.1)", "result": -0.10033534773107562},
    {"function": "BASE", "call": "BASE(15, 2, 10)", "result": "0000001111"},
    {"function": "CEILING", "call": "CEILING(-5.5, 2, -1)", "result": -6},
    {"function": "CEILINGMATH", "call": "CEILINGMATH(-5.5, 2, -1)", "result": -6},
    {"function": "CEILINGPRECISE", "call": "CEILINGPRECISE(-4.1, -2)", "result": -4},
    {"function": "COMBIN", "call": "COMBIN(8, 2)", "result": 28},
    {"function": "COMBINA", "call": "COMBINA(4, 3)", "result": 20},
    {"function": "COS", "call": "COS(1)", "result": 0.5403023058681398},
    {"function": "COSH", "call": "COSH(1)", "result": 1.5430806348152437},
    {"function": "COT", "call": "COT(30)", "result": -0.15611995216165922},
    {"function": "COTH", "call": "COTH(2)", "result": 1.0373147207275482},
    {"function": "CSC", "call": "CSC(15)", "result": 1.5377805615408537},
    {"function": "CSCH", "call": "CSCH(1.5)", "result": 0.46964244059522464},
    {"function": "DECIMAL", "call": "DECIMAL('FF', 16)", "result": 255},
    {"function": "DEGREES", "call": "DEGREES(PI())", "result": 180},
    {"function": "ERF", "call": "ERF(1)", "result": 0.8427007929497149},    
    {"function": "ERFC", "call": "ERFC(1)", "result": 0.1572992070502851},
    {"function": "EVEN", "call": "EVEN(-1)", "result": -2},
    {"function": "EXP", "call": "EXP(1)", "result": 2.718281828459045},
    {"function": "FACT", "call": "FACT(5)", "result": 120},
    {"function": "FACTDOUBLE", "call": "FACTDOUBLE(7)", "result": 105},
    {"function": "FLOOR", "call": "FLOOR(-3.1)", "result": -4},
    {"function": "FLOORMATH", "call": "FLOORMATH(-4.1, -2, -1)", "result": -4},
    {"function": "FLOORPRECISE", "call": "FLOORPRECISE(-3.1, -2)", "result": -4},
    {"function": "GCD", "call": "GCD(24, 36, 48)", "result": 12},
    {"function": "INT", "call": "INT(-8.9)", "result": -9},
    {"function": "ISEVEN", "call": "ISEVEN(-2.5)", "result": true},
    {"function": "ISOCEILING", "call": "ISOCEILING(-4.1, -2)", "result": -4},
    {"function": "ISODD", "call": "ISODD(-2.5)", "result": false},
    {"function": "LCM", "call": "LCM(24, 36, 48)", "result": 144},
    {"function": "LN", "call": "LN(86)", "result": 4.454347296253507},
    {"function": "LOG", "call": "LOG(8, 2)", "result": 3},
    {"function": "LOG10", "call": "LOG10(100000)", "result": 5},
    {"function": "MDETERM", "call": "MDETERM([[1,2],[3,4]])", "result": -2},
    {"function": "MINVERSE", "call": "MINVERSE([[1,3],[3,1]])", "result": "[[-0.125,0.375],[0.375,-0.125]]", "bypass": true},
    {"function": "MMULT", "call": "MMULT([[1,2],[3,4]],[[5,6]])", "result": "[[5,6],[15,18]]", "bypass": true},
    {"function": "MOD", "call": "MOD(3, -2)", "result": -1},
    {"function": "MROUND", "call": "MROUND(-10, -3)", "result": -9},
    {"function": "MULTINOMIAL", "call": "MULTINOMIAL(2, 3, 4)", "result": 1260},
    {"function": "MUNIT", "call": "MUNIT(3)", "result": [[1,0,0],[0,1,0],[0,0,1]]},
    {"function": "ODD", "call": "ODD(-1.5)", "result": -3},
    {"function": "PI", "call": "PI()", "result": 3.141592653589793},
    {"function": "POWER", "call": "POWER(5, 2)", "result": 25},
    {"function": "PRODUCT", "call": "PRODUCT(5, 15, 30)", "result": 2250},
    {"function": "QUOTIENT", "call": "QUOTIENT(-10, 3)", "result": -3},
    {"function": "RADIANS", "call": "RADIANS(180)", "result": 3.141592653589793},
    {"function": "RAND", "call": "RAND()", "result": "[Random real number greater between 0 and 1]", "bypass": true},
    {"function": "RANDBETWEEN", "call": "RANDBETWEEN(-1, 1)", "result": "[Random integer between bottom and top]", "bypass": true},
    {"function": "ROUND", "call": "ROUND(626.3, -3)", "result": 1000},
    {"function": "ROUNDDOWN", "call": "ROUNDDOWN(-3.14159, 2)", "result": -3.14},
    {"function": "ROUNDUP", "call": "ROUNDUP(-3.14159, 2)", "result": -3.15},
    {"function": "SEC", "call": "SEC(45)", "result": 1.9035944074044246},
    {"function": "SECH", "call": "SECH(45)", "result": 5.725037161098787e-20},
    {"function": "SERIESSUM", "call": "SERIESSUM(PI()/4, 0, 2, [1,-1/FACT(2),1/FACT(4),-1/FACT(6)])", "result": 0.7071032148228457},
    {"function": "SIGN", "call": "SIGN(-0.00001)", "result": -1},
    {"function": "SIN", "call": "SIN(1)", "result": 0.8414709848078965},
    {"function": "SINH", "call": "SINH(1)", "result": 1.1752011936438014},
    {"function": "SQRT", "call": "SQRT(16)", "result": 4},
    {"function": "SQRTPI", "call": "SQRTPI(2)", "result": 2.5066282746310002},
    {"function": "SUBTOTAL", "call": "SUBTOTAL(9, [-5,15], [32,'Hello World!'])", "result": [10,32]},
    {"function": "SUM", "call": "SUM(-5, 15, 32, 'Hello World!')", "result": 42},
    {"function": "SUMIF", "call": "SUMIF([2,4,8,16], '>5')", "result": 24},
    {"function": "SUMIFS", "call": "SUMIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')", "result": 12},
    {"function": "SUMPRODUCT", "call": "SUMPRODUCT([[1,2],[3,4]], [[1,0],[0,1]])", "result": 5},
    {"function": "SUMSQ", "call": "SUMSQ(3, 4)", "result": 25},
    {"function": "SUMX2MY2", "call": "SUMX2MY2([1,2], [3,4])", "result": -20},
    {"function": "SUMX2PY2", "call": "SUMX2PY2([1,2], [3,4])", "result": 30},
    {"function": "SUMXMY2", "call": "SUMXMY2([1,2], [3,4])", "result": 8},
    {"function": "TAN", "call": "TAN(1)", "result": 1.5574077246549023},
    {"function": "TANH", "call": "TANH(-2)", "result": -0.9640275800758168},
    {"function": "TRUNC", "call": "TRUNC(-8.9)", "result": -8}
  ]},
  {"type": "statistical", "tests": [
    {"function": "AVEDEV", "call": "AVEDEV([2,4], [8,16])", "result": 4.5},
    {"function": "AVERAGE", "call": "AVERAGE([2,4], [8,16])", "result": 7.5},
    {"function": "AVERAGEA", "call": "AVERAGEA([2,4], [8,16])", "result": 7.5},
    {"function": "AVERAGEIF", "call": "AVERAGEIF([2,4,8,16], '>5', [1, 2, 3, 4])", "result": 3.5},
    {"function": "AVERAGEIFS", "call": "AVERAGEIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')", "result": 6},
    {"function": "BETADIST", "call": "BETADIST(2, 8, 10, true, 1, 3)", "result": 0.6854705810117458},
    {"function": "BETAINV", "call": "BETAINV(0.6854705810117458, 8, 10, 1, 3)", "result": 1.9999999999999998},
    {"function": "BINOMDIST", "call": "BINOMDIST(6, 10, 0.5, false)", "result": 0.205078125},
    {"function": "BINOMDISTRANGE", "call": "BINOMDISTRANGE(60, 0.75, 45, 50)", "result": 0.5236297934718873},
    {"function": "BINOMINV", "call": "BINOMINV(6, 0.5, 0.75)", "result": 4},
    {"function": "CHISQDIST", "call": "CHISQDIST(0.5, 1, true)", "result": 0.5204998778130242},
    {"function": "CHISQINV", "call": "CHISQINV(0.6, 2, true)", "result": 1.83258146374831},
    {"function": "CONFIDENCENORM", "call": "CONFIDENCENORM(0.05, 2.5, 50)", "result": 0.6929519121748391},
    {"function": "CONFIDENCET", "call": "CONFIDENCET(0.05, 1, 50)", "result": 0.28419685015290463},
    {"function": "CORREL", "call": "CORREL([3,2,4,5,6], [9,7,12,15,17])", "result": 0.9970544855015815},
    {"function": "COUNT", "call": "COUNT([1,2], [3,4])", "result": 4},
    {"function": "COUNTA", "call": "COUNTA([1, null, 3, 'a', '', 'c'])", "result": 4},
    {"function": "COUNTBLANK", "call": "COUNTBLANK([1, null, 3, 'a', '', 'c'])", "result": 2},
    {"function": "COUNTIF", "call": "COUNTIF(['Caen', 'Melbourne', 'Palo Alto', 'Singapore'], 'a')", "result": 3},
    {"function": "COUNTIFS", "call": "COUNTIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')", "result": 2},
    {"function": "COUNTUNIQUE", "call": "COUNTUNIQUE([1,1,2,2,3,3])", "result": 3},
    {"function": "COVARIANCEP", "call": "COVARIANCEP([3,2,4,5,6], [9,7,12,15,17])", "result": 5.2},
    {"function": "COVARIANCES", "call": "COVARIANCES([2,4,8], [5,11,12])", "result": 9.666666666666668},
    {"function": "DEVSQ", "call": "DEVSQ([2,4,8,16])", "result": 115},
    {"function": "EXPONDIST", "call": "EXPONDIST(0.2, 10, true)", "result": 0.8646647167633873},
    {"function": "FDIST", "call": "FDIST(15.2069, 6, 4, false)", "result": 0.0012237917087831735},
    {"function": "FINV", "call": "FINV(0.01, 6, 4)", "result": 0.10930991412457851},
    {"function": "FISHER", "call": "FISHER(0.75)", "result": 0.9729550745276566},
    {"function": "FISHERINV", "call": "FISHERINV(0.9729550745276566)", "result": 0.75},
    {"function": "FORECAST", "call": "FORECAST(30, [6,7,9,15,21], [20,28,31,38,40])", "result": 10.607253086419755},
    {"function": "FREQUENCY", "call": "FREQUENCY([79,85,78,85,50,81,95,88,97], [70,79,89])", "result": [1,2,4,2]},
    {"function": "GAMMA", "call": "GAMMA(2.5)", "result": 1.3293403919101043},
    {"function": "GAMMALN", "call": "GAMMALN(10)", "result": 12.801827480081961},
    {"function": "GAUSS", "call": "GAUSS(2)", "result": 0.4772498680518208},
    {"function": "GEOMEAN", "call": "GEOMEAN([2,4], [8,16])", "result": 5.656854249492381},
    {"function": "GROWTH", "call": "GROWTH([2,4,8,16], [1,2,3,4], [5])", "result": [32.00000000000003]},
    {"function": "HARMEAN", "call": "HARMEAN([2,4], [8,16])", "result": 4.266666666666667},
    {"function": "HYPGEOMDIST", "call": "HYPGEOMDIST(1, 4, 8, 20, false)", "result": 0.3632610939112487},
    {"function": "INTERCEPT", "call": "INTERCEPT([2,3,9,1,8], [6,5,11,7,5])", "result": 0.04838709677419217},
    {"function": "KURT", "call": "KURT([3,4,5,2,3,4,5,6,4,7])", "result": -0.15179963720841627},
    {"function": "LARGE", "call": "LARGE([3,5,3,5,4,4,2,4,6,7], 3)", "result": 5},
    {"function": "LINEST", "call": "LINEST([1,9,5,7], [0,4,2,3], true, true)", "result": [2,1]},
    {"function": "LOGNORMDIST", "call": "LOGNORMDIST(4, 3.5, 1.2, true)", "result": 0.0390835557068005},
    {"function": "LOGNORMINV", "call": "LOGNORMINV(0.0390835557068005, 3.5, 1.2, true)", "result": 4.000000000000001},
    {"function": "MAX", "call": "MAX([0.1,0.2], [0.4,0.8], [true, false])", "result": 0.8},
    {"function": "MAXA", "call": "MAXA([0.1,0.2], [0.4,0.8], [true, false])", "result": 1},
    {"function": "MEDIAN", "call": "MEDIAN([1,2,3], [4,5,6])", "result": 3.5},
    {"function": "MIN", "call": "MIN([0.1,0.2], [0.4,0.8], [true, false])", "result": 0.1},
    {"function": "MINA", "call": "MINA([0.1,0.2], [0.4,0.8], [true, false])", "result": 0},
    {"function": "MODEMULT", "call": "MODEMULT([1,2,3,4,3,2,1,2,3])", "result": [2,3]},
    {"function": "MODESNGL", "call": "MODESNGL([1,2,3,4,3,2,1,2,3])", "result": 2},
    {"function": "NORMDIST", "call": "NORMDIST(42, 40, 1.5, true)", "result": 0.9087887802741321},
    {"function": "NORMINV", "call": "NORMINV(0.9087887802741321, 40, 1.5)", "result": 42},
    {"function": "NORMSDIST", "call": "NORMSDIST(1, true)", "result": 0.8413447460685429},
    {"function": "NORMSINV", "call": "NORMSINV(0.8413447460685429)", "result": 1.0000000000000002},
    {"function": "PEARSON", "call": "PEARSON([9,7,5,3,1], [10,6,1,5,3])", "result": 0.6993786061802354},
    {"function": "PERCENTILEEXC", "call": "PERCENTILEEXC([1,2,3,4], 0.3)", "result": 1.5},
    {"function": "PERCENTILEINC", "call": "PERCENTILEINC([1,2,3,4], 0.3)", "result": 1.9},
    {"function": "PERCENTRANKEXC", "call": "PERCENTRANKEXC([1,2,3,4], 2, 2)", "result": 0.4},
    {"function": "PERCENTRANKINC", "call": "PERCENTRANKINC([1,2,3,4], 2, 2)", "result": 0.33},
    {"function": "PERMUT", "call": "PERMUT(100, 3)", "result": 970200},
    {"function": "PERMUTATIONA", "call": "PERMUTATIONA(4, 3)", "result": 64},
    {"function": "PHI", "call": "PHI(0.75)", "result": 0.30113743215480443},
    {"function": "POISSONDIST", "call": "POISSONDIST(2, 5, true)", "result": 0.12465201948308113},
    {"function": "PROB", "call": "PROB([1,2,3,4], [0.1,0.2,0.2,0.1], 2, 3)", "result": 0.4},
    {"function": "QUARTILEEXC", "call": "QUARTILEEXC([1,2,3,4], 1)", "result": 1.25},
    {"function": "QUARTILEINC", "call": "QUARTILEINC([1,2,3,4], 1)", "result": 1.75},
    {"function": "RANKAVG", "call": "RANKAVG(4, [2,4,4,8,8,16], false)", "result": 4.5},
    {"function": "RANKEQ", "call": "RANKEQ(4, [2,4,4,8,8,16], false)", "result": 4},
    {"function": "RSQ", "call": "RSQ([9,7,5,3,1], [10,6,1,5,3])", "result": 0.4891304347826088},
    {"function": "SKEW", "call": "SKEW([3,4,5,2,3,4,5,6,4,7])", "result": 0.3595430714067974},
    {"function": "SKEWP", "call": "SKEWP([3,4,5,2,3,4,5,6,4,7])", "result": 0.303193339354144},
    {"function": "SLOPE", "call": "SLOPE([1,9,5,7], [0,4,2,3])", "result": 2},
    {"function": "SMALL", "call": "SMALL([3,5,3,5,4,4,2,4,6,7], 3)", "result": 3},
    {"function": "STANDARDIZE", "call": "STANDARDIZE(42, 40, 1.5)", "result": 1.3333333333333333},
    {"function": "STDEVA", "call": "STDEVA([2,4], [8,16], [true, false])", "result": 6.013872850889572},
    {"function": "STDEVP", "call": "STDEVP([2,4], [8,16], [true, false])", "result": 5.361902647381804},
    {"function": "STDEVPA", "call": "STDEVPA([2,4], [8,16], [true, false])", "result": 5.489889697333535},
    {"function": "STDEVS", "call": "STDEVS([2,4], [8,16], [true, false])", "result": 6.191391873668904},
    {"function": "STEYX", "call": "STEYX([2,3,9,1,8,7,5], [6,5,11,7,5,4,4])", "result": 3.305718950210041},
    {"function": "TDIST", "call": "TDIST(60, 1, true)", "result": 0.9946953263673741},
    {"function": "TINV", "call": "TINV(0.9946953263673741, 1)", "result": 59.99999999996535},
    {"function": "TRIMMEAN", "call": "TRIMMEAN([4,5,6,7,2,3,4,5,1,2,3], 0.2)", "result": 3.7777777777777777},
    {"function": "VARA", "call": "VARA([2,4], [8,16], [true, false])", "result": 36.16666666666667},
    {"function": "VARP", "call": "VARP([2,4], [8,16], [true, false])", "result": 28.75},
    {"function": "VARPA", "call": "VARPA([2,4], [8,16], [true, false])", "result": 30.13888888888889},
    {"function": "VARS", "call": "VARS([2,4], [8,16], [true, false])", "result": 38.333333333333336},
    {"function": "WEIBULLDIST", "call": "WEIBULLDIST(105, 20, 100, true)", "result": 0.9295813900692769},
    {"function": "ZTEST", "call": "ZTEST([3,6,7,8,6,5,4,2,1,9], 4)", "result": 0.09057419685136381}
  ]},
  {"type": "text", "tests": [
    {"function": "CHAR", "call": "CHAR(65)", "result": "A"},
    {"function": "CLEAN", "call": "CLEAN(CHAR(9) + 'Monthly report' + CHAR(10))", "result": "Monthly report"},
    {"function": "CODE", "call": "CODE('A')", "result": "65"},
    {"function": "CONCATENATE", "call": "CONCATENATE('Andreas', ' ', 'Hauser')", "result": "Andreas Hauser"},
    {"function": "DOLLAR", "call": "DOLLAR(-0.123, 4)", "result": "($0.1230)"},
    {"function": "EXACT", "call": "EXACT('Word', 'word')", "result": false},
    {"function": "FIND", "call": "FIND('M', 'Miriam McGovern', 3)", "result": 8},
    {"function": "FIXED", "call": "FIXED(-1234.567, -1, true)", "result": -1230},
    {"function": "JOIN", "call": "JOIN('-', ['a','b','c'])", "result": "a-b-c"},
    {"function": "LEFT", "call": "LEFT('Sale Price', 4)", "result": "Sale"},
    {"function": "LEN", "call": "LEN('Phoenix, AZ')", "result": 11},
    {"function": "LOWER", "call": "LOWER('E. E. Cummings')", "result": "e. e. cummings"},
    {"function": "MID", "call": "MID('Fluid Flow', 7, 20)", "result": "Flow"},
    {"function": "NUMBERVALUE", "call": "NUMBERVALUE('2.500,27', ',', '.')", "result": 2500.27},
    {"function": "PROPER", "call": "PROPER('this is a TITLE')", "result": "This Is A Title"},
    {"function": "REGEXEXTRACT", "call": "REGEXEXTRACT('Palo Alto', 'Alto')", "result": "Alto"},
    {"function": "REGEXMATCH", "call": "REGEXMATCH('Palo Alto', 'Alto')", "result": true},
    {"function": "REGEXREPLACE", "call": "REGEXREPLACE('Sutoiku', 'utoiku', 'TOIC')", "result": "STOIC"},
    {"function": "REPLACE", "call": "REPLACE('abcdefghijk', 6, 5, '*')", "result": "abcde*k"},
    {"function": "REPT", "call": "REPT('*-', 3)", "result": "*-*-*-"},
    {"function": "RIGHT", "call": "RIGHT('Sale Price', 5)", "result": "Price"},
    {"function": "ROMAN", "call": "ROMAN(499)", "result": "CDXCIX"},
    {"function": "SEARCH", "call": "SEARCH('margin', 'Profit Margin')", "result": 8},
    {"function": "SPLIT", "call": "SPLIT('A,B,C', ',')", "result": ["A","B","C"]},
    {"function": "SUBSTITUTE", "call": "SUBSTITUTE('Quarter 1, 2011', '1', '2', 3)", "result": "Quarter 1, 2012"},
    {"function": "T", "call": "T('Rainfall')", "result": "Rainfall"},
    {"function": "TEXT", "call": "TEXT(8.9, '0.000')", "result": "8.900"},
    {"function": "TRIM", "call": "TRIM(' First Quarter Earnings ')", "result": "First Quarter Earnings"},
    {"function": "UNICHAR", "call": "UNICHAR(66)", "result": "B"},
    {"function": "UNICODE", "call": "UNICODE('B')", "result": 66},
    {"function": "UPPER", "call": "UPPER('total')", "result": "TOTAL"},
    {"function": "VALUE", "call": "VALUE('$1,000')", "result": 1000}
  ]}
];