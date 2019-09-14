/**
 * A Versification represents the way in which the bible text is split into
 * books, chapters and verses
 *
 * This module exports both a type decleration, and the default data set
 */

export interface BookMeta {
	// 3 character USFM identifier, in upper case
	id: string,

	// Canconical name
	name: string,

	// Common aliases/shortenings
	aliases: string[],

	// Number of chapters within the book
	chapter_count : number,

	// Mapping of chapter number to the number of verses within that chapter
	[index: number] : number,
};

export interface Versification {
	// Array of books within this Versification scheme
	order : BookMeta[],

	// Mapping from book ID (eg GEN, REV) to the corresponding
	// element of the order array
	book : { [ index: string ] : BookMeta }
};

let data : BookMeta[] = [
	{ id            : 'GEN',
		name          : 'Genesis',
		aliases       : [],
		chapter_count : 50,
		"1":31,"2":25,"3":24,"4":26,"5":32,"6":22,"7":24,"8":22,"9":29,"10":32,"11":32,"12":20,"13":18,"14":24,"15":21,"16":16,"17":27,"18":33,"19":38,"20":18,"21":34,"22":24,"23":20,"24":67,"25":34,"26":35,"27":46,"28":22,"29":35,"30":43,"31":55,"32":32,"33":20,"34":31,"35":29,"36":43,"37":36,"38":30,"39":23,"40":23,"41":57,"42":38,"43":34,"44":34,"45":28,"46":34,"47":31,"48":22,"49":33,"50":26,
	},
	{ id            : 'EXO',
		name          : "Exodus",
		aliases       : ["Exod", "Ex"],
		chapter_count : 40,
		"1":22,"2":25,"3":22,"4":31,"5":23,"6":30,"7":25,"8":32,"9":35,"10":29,"11":10,"12":51,"13":22,"14":31,"15":27,"16":36,"17":16,"18":27,"19":25,"20":26,"21":36,"22":31,"23":33,"24":18,"25":40,"26":37,"27":21,"28":43,"29":46,"30":38,"31":18,"32":35,"33":23,"34":35,"35":35,"36":38,"37":29,"38":31,"39":43,"40":38,
	},
	{ id            : 'LEV',
		name          : "Leviticus",
		aliases       : [],
		chapter_count : 27,
		"1":17,"2":16,"3":17,"4":35,"5":19,"6":30,"7":38,"8":36,"9":24,"10":20,"11":47,"12":8,"13":59,"14":57,"15":33,"16":34,"17":16,"18":30,"19":37,"20":27,"21":24,"22":33,"23":44,"24":23,"25":55,"26":46,"27":34,
	},
	{ id            : 'NUM',
		name          : "Numbers",
		aliases       : [],
		chapter_count : 36,
		"1":54,"2":34,"3":51,"4":49,"5":31,"6":27,"7":89,"8":26,"9":23,"10":36,"11":35,"12":16,"13":33,"14":45,"15":41,"16":50,"17":13,"18":32,"19":22,"20":29,"21":35,"22":41,"23":30,"24":25,"25":18,"26":65,"27":23,"28":31,"29":40,"30":16,"31":54,"32":42,"33":56,"34":29,"35":34,"36":13,
	},
	{ id            : 'DEU',
		name          : "Deuteronomy",
		aliases       : ["Deut"],
		chapter_count : 34,
		"1":46,"2":37,"3":29,"4":49,"5":33,"6":25,"7":26,"8":20,"9":29,"10":22,"11":32,"12":32,"13":18,"14":29,"15":23,"16":22,"17":20,"18":22,"19":21,"20":20,"21":23,"22":30,"23":25,"24":22,"25":19,"26":19,"27":26,"28":68,"29":29,"30":20,"31":30,"32":52,"33":29,"34":12,
	},
	{ id            : 'JOS',
		name          : "Joshua",
		aliases       : ["Josh"],
		chapter_count : 24,
		"1":18,"2":24,"3":17,"4":24,"5":15,"6":27,"7":26,"8":35,"9":27,"10":43,"11":23,"12":24,"13":33,"14":15,"15":63,"16":10,"17":18,"18":28,"19":51,"20":9,"21":45,"22":34,"23":16,"24":33,
	},
	{ id            : 'JDG',
		name          : "Judges",
		aliases       : [],
		chapter_count : 21,
		"1":36,"2":23,"3":31,"4":24,"5":31,"6":40,"7":25,"8":35,"9":57,"10":18,"11":40,"12":15,"13":25,"14":20,"15":20,"16":31,"17":13,"18":31,"19":30,"20":48,"21":25,
	},
	{ id            : 'RUT',
		name          : "Ruth",
		aliases       : [],
		chapter_count : 4,
		"1":22,"2":23,"3":18,"4":22,
	},
	{ id            : '1SA',
		name          : "1 Samuel",
		aliases       : ["1 Sam"],
		chapter_count : 31,
		"1":28,"2":36,"3":21,"4":22,"5":12,"6":21,"7":17,"8":22,"9":27,"10":27,"11":15,"12":25,"13":23,"14":52,"15":35,"16":23,"17":58,"18":30,"19":24,"20":42,"21":15,"22":23,"23":29,"24":22,"25":44,"26":25,"27":12,"28":25,"29":11,"30":31,"31":13,
	},
	{ id            : '2SA',
		name          : "2 Samuel",
		aliases       : ["2 Sam"],
		chapter_count : 24,
		"1":27,"2":32,"3":39,"4":12,"5":25,"6":23,"7":29,"8":18,"9":13,"10":19,"11":27,"12":31,"13":39,"14":33,"15":37,"16":23,"17":29,"18":33,"19":43,"20":26,"21":22,"22":51,"23":39,"24":25,
	},
	{ id            : '1KI',
		name          : "1 Kings",
		aliases       : ["1 Kgs"],
		chapter_count : 22,
		"1":53,"2":46,"3":28,"4":34,"5":18,"6":38,"7":51,"8":66,"9":28,"10":29,"11":43,"12":33,"13":34,"14":31,"15":34,"16":34,"17":24,"18":46,"19":21,"20":43,"21":29,"22":53,
	},
	{ id            : '2KI',
		name          : "2 Kings",
		aliases       : ["2 Kgs"],
		chapter_count : 25,
		"1":18,"2":25,"3":27,"4":44,"5":27,"6":33,"7":20,"8":29,"9":37,"10":36,"11":21,"12":21,"13":25,"14":29,"15":38,"16":20,"17":41,"18":37,"19":37,"20":21,"21":26,"22":20,"23":37,"24":20,"25":30,
	},
	{ id            : '1CH',
		name          : "1 Chronicles",
		aliases       : ["1 Chr"],
		chapter_count : 29,
		"1":54,"2":55,"3":24,"4":43,"5":26,"6":81,"7":40,"8":40,"9":44,"10":14,"11":47,"12":40,"13":14,"14":17,"15":29,"16":43,"17":27,"18":17,"19":19,"20":8,"21":30,"22":19,"23":32,"24":31,"25":31,"26":32,"27":34,"28":21,"29":30,
	},
	{ id            : '2CH',
		name          : "2 Chronicles",
		aliases       : ["2 Chr"],
		chapter_count : 36,
		"1":17,"2":18,"3":17,"4":22,"5":14,"6":42,"7":22,"8":18,"9":31,"10":19,"11":23,"12":16,"13":22,"14":15,"15":19,"16":14,"17":19,"18":34,"19":11,"20":37,"21":20,"22":12,"23":21,"24":27,"25":28,"26":23,"27":9,"28":27,"29":36,"30":27,"31":21,"32":33,"33":25,"34":33,"35":27,"36":23,
	},
	{ id            : 'EZR',
		name          : "Ezra",
		aliases       : [],
		chapter_count : 10,
		"1":11,"2":70,"3":13,"4":24,"5":17,"6":22,"7":28,"8":36,"9":15,"10":44,
	},
	{ id            : 'NEH',
		name          : "Nehemiah",
		aliases       : [],
		chapter_count : 13,
		"1":11,"2":20,"3":32,"4":23,"5":19,"6":19,"7":73,"8":18,"9":38,"10":39,"11":36,"12":47,"13":31,
	},
	{ id            : 'EST',
		name          : "Esther",
		aliases       : [],
		chapter_count : 10,
		"1":22,"2":23,"3":15,"4":17,"5":14,"6":14,"7":10,"8":17,"9":32,"10":3,
	},
	{ id            : 'JOB',
		name          : "Job",
		aliases       : [],
		chapter_count : 42,
		"1":22,"2":13,"3":26,"4":21,"5":27,"6":30,"7":21,"8":22,"9":35,"10":22,"11":20,"12":25,"13":28,"14":22,"15":35,"16":22,"17":16,"18":21,"19":29,"20":29,"21":34,"22":30,"23":17,"24":25,"25":6,"26":14,"27":23,"28":28,"29":25,"30":31,"31":40,"32":22,"33":33,"34":37,"35":16,"36":33,"37":24,"38":41,"39":30,"40":24,"41":34,"42":17,
	},
	{ id            : 'PSA',
		name          : "Psalm",
		aliases       : [ "Psalms", "Ps"],
		chapter_count : 150,
		"1":6,"2":12,"3":8,"4":8,"5":12,"6":10,"7":17,"8":9,"9":20,"10":18,"11":7,"12":8,"13":6,"14":7,"15":5,"16":11,"17":15,"18":50,"19":14,"20":9,"21":13,"22":31,"23":6,"24":10,"25":22,"26":12,"27":14,"28":9,"29":11,"30":12,"31":24,"32":11,"33":22,"34":22,"35":28,"36":12,"37":40,"38":22,"39":13,"40":17,"41":13,"42":11,"43":5,"44":26,"45":17,"46":11,"47":9,"48":14,"49":20,"50":23,"51":19,"52":9,"53":6,"54":7,"55":23,"56":13,"57":11,"58":11,"59":17,"60":12,"61":8,"62":12,"63":11,"64":10,"65":13,"66":20,"67":7,"68":35,"69":36,"70":5,"71":24,"72":20,"73":28,"74":23,"75":10,"76":12,"77":20,"78":72,"79":13,"80":19,"81":16,"82":8,"83":18,"84":12,"85":13,"86":17,"87":7,"88":18,"89":52,"90":17,"91":16,"92":15,"93":5,"94":23,"95":11,"96":13,"97":12,"98":9,"99":9,"100":5,"101":8,"102":28,"103":22,"104":35,"105":45,"106":48,"107":43,"108":13,"109":31,"110":7,"111":10,"112":10,"113":9,"114":8,"115":18,"116":19,"117":2,"118":29,"119":176,"120":7,"121":8,"122":9,"123":4,"124":8,"125":5,"126":6,"127":5,"128":6,"129":8,"130":8,"131":3,"132":18,"133":3,"134":3,"135":21,"136":26,"137":9,"138":8,"139":24,"140":13,"141":10,"142":7,"143":12,"144":15,"145":21,"146":10,"147":20,"148":14,"149":9,"150":6,
	},
	{ id            : 'PRO',
		name          : "Proverbs",
		aliases       : [ "Prov" ],
		chapter_count : 31,
		"1":33,"2":22,"3":35,"4":27,"5":23,"6":35,"7":27,"8":36,"9":18,"10":32,"11":31,"12":28,"13":25,"14":35,"15":33,"16":33,"17":28,"18":24,"19":29,"20":30,"21":31,"22":29,"23":35,"24":34,"25":28,"26":28,"27":27,"28":28,"29":27,"30":33,"31":31,
	},
	{ id            : 'ECC',
		name          : "Ecclesiastes",
		aliases       : [ "Eccl" ],
		chapter_count : 12,
		"1":18,"2":26,"3":22,"4":16,"5":20,"6":12,"7":29,"8":17,"9":18,"10":20,"11":10,"12":14,
	},
	{ id            : 'SNG',
		name          : "Song of Solomon",
		aliases       : [ "Song", "Song of Songs", "SOS"],
		chapter_count : 8,
		"1":17,"2":17,"3":11,"4":16,"5":16,"6":13,"7":13,"8":14,
	},
	{ id            : 'ISA',
		name          : "Isaiah",
		aliases       : [],
		chapter_count : 66,
		"1":31,"2":22,"3":26,"4":6,"5":30,"6":13,"7":25,"8":22,"9":21,"10":34,"11":16,"12":6,"13":22,"14":32,"15":9,"16":14,"17":14,"18":7,"19":25,"20":6,"21":17,"22":25,"23":18,"24":23,"25":12,"26":21,"27":13,"28":29,"29":24,"30":33,"31":9,"32":20,"33":24,"34":17,"35":10,"36":22,"37":38,"38":22,"39":8,"40":31,"41":29,"42":25,"43":28,"44":28,"45":25,"46":13,"47":15,"48":22,"49":26,"50":11,"51":23,"52":15,"53":12,"54":17,"55":13,"56":12,"57":21,"58":14,"59":21,"60":22,"61":11,"62":12,"63":19,"64":12,"65":25,"66":24,
	},
	{ id            : 'JER',
		name          : "Jeremiah",
		aliases       : [],
		chapter_count : 52,
		"1":19,"2":37,"3":25,"4":31,"5":31,"6":30,"7":34,"8":22,"9":26,"10":25,"11":23,"12":17,"13":27,"14":22,"15":21,"16":21,"17":27,"18":23,"19":15,"20":18,"21":14,"22":30,"23":40,"24":10,"25":38,"26":24,"27":22,"28":17,"29":32,"30":24,"31":40,"32":44,"33":26,"34":22,"35":19,"36":32,"37":21,"38":28,"39":18,"40":16,"41":18,"42":22,"43":13,"44":30,"45":5,"46":28,"47":7,"48":47,"49":39,"50":46,"51":64,"52":34,
	},
	{ id            : 'LAM',
		name          : "Lamentations",
		aliases       : [],
		chapter_count : 5,
		"1":22,"2":22,"3":66,"4":22,"5":22,
	},
	{ id            : 'EZK',
		name          : "Ezekiel",
		aliases       : [ "Ezek" ],
		chapter_count : 48,
		"1":28,"2":10,"3":27,"4":17,"5":17,"6":14,"7":27,"8":18,"9":11,"10":22,"11":25,"12":28,"13":23,"14":23,"15":8,"16":63,"17":24,"18":32,"19":14,"20":49,"21":32,"22":31,"23":49,"24":27,"25":17,"26":21,"27":36,"28":26,"29":21,"30":26,"31":18,"32":32,"33":33,"34":31,"35":15,"36":38,"37":28,"38":23,"39":29,"40":49,"41":26,"42":20,"43":27,"44":31,"45":25,"46":24,"47":23,"48":35,
	},
	{ id            : 'DAN',
		name          : "Daniel",
		aliases       : [],
		chapter_count : 12,
		"1":21,"2":49,"3":30,"4":37,"5":31,"6":28,"7":28,"8":27,"9":27,"10":21,"11":45,"12":13,
	},
	{ id            : 'HOS',
		name          : "Hosea",
		aliases       : [],
		chapter_count : 14,
		"1":11,"2":23,"3":5,"4":19,"5":15,"6":11,"7":16,"8":14,"9":17,"10":15,"11":12,"12":14,"13":16,"14":9,
	},
	{ id            : 'JOL',
		name          : "Joel",
		aliases       : [],
		chapter_count : 3,
		"1":20,"2":32,"3":21,
	},
	{ id            : 'AMO',
		name          : "Amos",
		aliases       : [],
		chapter_count : 9,
		"1":15,"2":16,"3":15,"4":13,"5":27,"6":14,"7":17,"8":14,"9":15,
	},
	{ id            : 'OBA',
		name          : "Obadiah",
		aliases       : [ "Obad" ],
		chapter_count : 1,
		"1":21,
	},
	{ id            : 'JON',
		name          : "Jonah",
		aliases       : [],
		chapter_count : 4,
		"1":17,"2":10,"3":10,"4":11,
	},
	{ id            : 'MIC',
		name          : "Micah",
		aliases       : [],
		chapter_count : 7,
		"1":16,"2":13,"3":12,"4":13,"5":15,"6":16,"7":20,
	},
	{ id            : 'NAM',
		name          : "Nahum",
		aliases       : [],
		chapter_count : 3,
		"1":15,"2":13,"3":19,
	},
	{ id            : 'HAB',
		name          : "Habakkuk",
		aliases       : [],
		chapter_count : 3,
		"1":17,"2":20,"3":19,
	},
	{ id            : 'ZEP',
		name          : "Zephaniah",
		aliases       : [ "Zeph" ],
		chapter_count : 3,
		"1":18,"2":15,"3":20,
	},
	{ id            : 'HAG',
		name          : "Haggai",
		aliases       : [],
		chapter_count : 2,
		"1":15,"2":23,
	},
	{ id            : 'ZEC',
		name          : "Zechariah",
		aliases       : [ "Zech" ],
		chapter_count : 14,
		"1":21,"2":13,"3":10,"4":14,"5":11,"6":15,"7":14,"8":23,"9":17,"10":12,"11":17,"12":14,"13":9,"14":21,
	},
	{ id            : 'MAL',
		name          : "Malachi",
		aliases       : [],
		chapter_count : 4,
		"1":14,"2":17,"3":18,"4":6,
	},
	{ id            : 'MAT',
		name          : "Matthew",
		aliases       : [ "Matt" ],
		chapter_count : 28,
		"1":25,"2":23,"3":17,"4":25,"5":48,"6":34,"7":29,"8":34,"9":38,"10":42,"11":30,"12":50,"13":58,"14":36,"15":39,"16":28,"17":27,"18":35,"19":30,"20":34,"21":46,"22":46,"23":39,"24":51,"25":46,"26":75,"27":66,"28":20,
	},
	{ id            : 'MRK',
		name          : "Mark",
		aliases       : [],
		chapter_count : 16,
		"1":45,"2":28,"3":35,"4":41,"5":43,"6":56,"7":37,"8":38,"9":50,"10":52,"11":33,"12":44,"13":37,"14":72,"15":47,"16":20,
	},
	{ id            : 'LUK',
		name          : "Luke",
		aliases       : [],
		chapter_count : 24,
		"1":80,"2":52,"3":38,"4":44,"5":39,"6":49,"7":50,"8":56,"9":62,"10":42,"11":54,"12":59,"13":35,"14":35,"15":32,"16":31,"17":37,"18":43,"19":48,"20":47,"21":38,"22":71,"23":56,"24":53,
	},
	{ id            : 'JHN',
		name          : "John",
		aliases       : [],
		chapter_count : 21,
		"1":51,"2":25,"3":36,"4":54,"5":47,"6":71,"7":53,"8":59,"9":41,"10":42,"11":57,"12":50,"13":38,"14":31,"15":27,"16":33,"17":26,"18":40,"19":42,"20":31,"21":25,
	},
	{ id            : 'ACT',
		name          : "Acts",
		aliases       : [],
		chapter_count : 28,
		"1":26,"2":47,"3":26,"4":37,"5":42,"6":15,"7":60,"8":40,"9":43,"10":48,"11":30,"12":25,"13":52,"14":28,"15":41,"16":40,"17":34,"18":28,"19":41,"20":38,"21":40,"22":30,"23":35,"24":27,"25":27,"26":32,"27":44,"28":31,
	},
	{ id            : 'ROM',
		name          : "Romans",
		aliases       : [],
		chapter_count : 16,
		"1":32,"2":29,"3":31,"4":25,"5":21,"6":23,"7":25,"8":39,"9":33,"10":21,"11":36,"12":21,"13":14,"14":23,"15":33,"16":27,
	},
	{ id            : '1CO',
		name          : "1 Corinthians",
		aliases       : [ "1 Cor"],
		chapter_count : 16,
		"1":31,"2":16,"3":23,"4":21,"5":13,"6":20,"7":40,"8":13,"9":27,"10":33,"11":34,"12":31,"13":13,"14":40,"15":58,"16":24,
	},
	{ id            : '2CO',
		name          : "2 Corinthians",
		aliases       : ["2 Cor"],
		chapter_count : 13,
		"1":24,"2":17,"3":18,"4":18,"5":21,"6":18,"7":16,"8":24,"9":15,"10":18,"11":33,"12":21,"13":14,
	},
	{ id            : 'GAL',
		name          : "Galatians",
		aliases       : [],
		chapter_count : 6,
		"1":24,"2":21,"3":29,"4":31,"5":26,"6":18,
	},
	{ id            : 'EPH',
		name          : "Ephesians",
		aliases       : [],
		chapter_count : 6,
		"1":23,"2":22,"3":21,"4":32,"5":33,"6":24,
	},
	{ id            : 'PHP',
		name          : "Philippians",
		aliases       : [],
		chapter_count : 4,
		"1":30,"2":30,"3":21,"4":23,
	},
	{ id            : 'COL',
		name          : "Colossians",
		aliases       : [],
		chapter_count : 4,
		"1":29,"2":23,"3":25,"4":18,
	},
	{ id            : '1TH',
		name          : "1 Thessalonians",
		aliases       : ["1 Thess"],
		chapter_count : 5,
		"1":10,"2":20,"3":13,"4":18,"5":28,
	},
	{ id            : '2TH',
		name          : "2 Thessalonians",
		aliases       : ["2 Thess"],
		chapter_count : 3,
		"1":12,"2":17,"3":18,
	},
	{ id            : '1TI',
		name          : "1 Timothy",
		aliases       : [],
		chapter_count : 6,
		"1":20,"2":15,"3":16,"4":16,"5":25,"6":21,
	},
	{ id            : '2TI',
		name          : "2 Timothy",
		aliases       : [],
		chapter_count : 4,
		"1":18,"2":26,"3":17,"4":22,
	},
	{ id            : 'TIT',
		name          : "Titus",
		aliases       : [],
		chapter_count : 3,
		"1":16,"2":15,"3":15,
	},
	{ id            : 'PHM',
		name          : "Philemon",
		aliases       : ["Phlm"],
		chapter_count : 1,
		"1":25,
	},
	{ id            : 'HEB',
		name          : "Hebrews",
		aliases       : [],
		chapter_count : 13,
		"1":14,"2":18,"3":19,"4":16,"5":14,"6":20,"7":28,"8":13,"9":28,"10":39,"11":40,"12":29,"13":25,
	},
	{ id            : 'JAS',
		name          : "James",
		aliases       : [],
		chapter_count : 5,
		"1":27,"2":26,"3":18,"4":17,"5":20,
	},
	{ id            : '1PE',
		name          : "1 Peter",
		aliases       : [],
		chapter_count : 5,
		"1":25,"2":25,"3":22,"4":19,"5":14,
	},
	{ id            : '2PE',
		name          : "2 Peter",
		aliases       : [],
		chapter_count : 3,
		"1":21,"2":22,"3":18,
	},
	{ id            : '1JN',
		name          : "1 John",
		aliases       : [],
		chapter_count : 5,
		"1":10,"2":29,"3":24,"4":21,"5":21,
	},
	{ id            : '2JN',
		name          : "2 John",
		aliases       : [],
		chapter_count : 1,
		"1":13,
	},
	{ id            : '3JN',
		name          : "3 John",
		aliases       : [],
		chapter_count : 1,
		"1":14,
	},
	{ id            : 'JUD',
		name          : "Jude",
		aliases       : [],
		chapter_count : 1,
		"1":25,
	},
	{ id            : 'REV',
		name          : "Revelation",
		aliases       : [],
		chapter_count : 22,
		"1":20,"2":29,"3":22,"4":11,"5":14,"6":17,"7":17,"8":13,"9":21,"10":11,"11":19,"12":17,"13":18,"14":20,"15":8,"16":21,"17":18,"18":24,"19":21,"20":15,"21":27,"22":21
	},
];

const VERSIFICATION : Versification = {
	order: data,

	book: {
		"GEN": data[ 0], "EXO": data[ 1], "LEV": data[ 2], "NUM": data[ 3],
		"DEU": data[ 4], "JOS": data[ 5], "JDG": data[ 6], "RUT": data[ 7],
		"1SA": data[ 8], "2SA": data[ 9], "1KI": data[10], "2KI": data[11],
		"1CH": data[12], "2CH": data[13], "EZR": data[14], "NEH": data[15],
		"EST": data[16], "JOB": data[17], "PSA": data[18], "PRO": data[19],
		"ECC": data[20], "SNG": data[21], "ISA": data[22], "JER": data[23],
		"LAM": data[24], "EZK": data[25], "DAN": data[26], "HOS": data[27],
		"JOL": data[28], "AMO": data[29], "OBA": data[30], "JON": data[31],
		"MIC": data[32], "NAM": data[33], "HAB": data[34], "ZEP": data[35],
		"HAG": data[36], "ZEC": data[37], "MAL": data[38], "MAT": data[39],
		"MRK": data[40], "LUK": data[41], "JHN": data[42], "ACT": data[43],
		"ROM": data[44], "1CO": data[45], "2CO": data[46], "GAL": data[47],
		"EPH": data[48], "PHP": data[49], "COL": data[50], "1TH": data[51],
		"2TH": data[52], "1TI": data[53], "2TI": data[54], "TIT": data[55],
		"PHM": data[56], "HEB": data[57], "JAS": data[58], "1PE": data[59],
		"2PE": data[60], "1JN": data[61], "2JN": data[62], "3JN": data[63],
		"JUD": data[64], "REV": data[65],
	},
};

export default VERSIFICATION;
