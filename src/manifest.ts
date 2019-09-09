// We use the USFM book identifiers as the keys, see:
// https://ubsicap.github.io/usfm/identification/books.html
//
// :TODO: there are various "extra" books that appear in some texts/cultures
// that are not included below...

const MANIFEST = {
  order: [
    'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA',
    '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO',
    'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO',
    'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL', 'MAT',
    'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP',
    'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE',
    '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV',
  ],

  book_names: {
    'GEN': 'Genesis',
		'EXO': "Exodus",
		'LEV': "Leviticus",
		'NUM': "Numbers",
		'DEU': "Deuteronomy",
		'JOS': "Joshua",
		'JDG': "Judges",
		'RUT': "Ruth",
		'1SA': "1 Samuel",
		'2SA': "2 Samuel",
		'1KI': "1 Kings",
		'2KI': "2 Kings",
		'1CH': "1 Chronicles",
		'2CH': "2 Chronicles",
		'EZR': "Ezra",
		'NEH': "Nehemiah",
		'EST': "Esther",
		'JOB': "Job",
		'PSA': "Psalms",
		'PRO': "Proverbs",
		'ECC': "Ecclesiastes",
		'SNG': "Song of Solomon",
		'ISA': "Isaiah",
		'JER': "Jeremiah",
		'LAM': "Lamentations",
		'EZK': "Ezekiel",
		'DAN': "Daniel",
		'HOS': "Hosea",
		'JOL': "Joel",
		'AMO': "Amos",
		'OBA': "Obadiah",
		'JON': "Jonah",
		'MIC': "Micah",
		'NAM': "Nahum",
		'HAB': "Habakkuk",
		'ZEP': "Zephaniah",
		'HAG': "Haggai",
		'ZEC': "Zechariah",
		'MAL': "Malachi",
		'MAT': "Matthew",
		'MRK': "Mark",
		'LUK': "Luke",
		'JHN': "John",
		'ACT': "Acts",
		'ROM': "Romans",
		'1CO': "1 Corinthians",
		'2CO': "2 Corinthians",
		'GAL': "Galatians",
		'EPH': "Ephesians",
		'PHP': "Philippians",
		'COL': "Colossians",
		'1TH': "1 Thessalonians",
		'2TH': "2 Thessalonians",
		'1TI': "1 Timothy",
		'2TI': "2 Timothy",
		'TIT': "Titus",
		'PHM': "Philemon",
		'HEB': "Hebrews",
		'JAS': "James",
		'1PE': "1 Peter",
		'2PE': "2 Peter",
		'1JN': "1 John",
		'2JN': "2 John",
		'3JN': "3 John",
		'JUD': "Jude",
		'REV': "Revelation",
  },
};

export default MANIFEST;
