// O Level Accounting 7707 practice MCQs, original questions written for EduForEveryone.
// Mapped to the Cambridge O Level Accounting 7707 syllabus for 2027 to 2029 (topic numbers 1.1 to 7.3).
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.

export type McqTable = { headers: string[]; rows: string[][] };

export type AccountingMcq = {
  id: string;
  level: "O Level 7707";
  topic: string;
  topicTitle: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  table?: McqTable;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  // One line per option, same order as options: why it is right or wrong.
  optionFeedback: [string, string, string, string];
};

export const oLevelAccountingMcqs: AccountingMcq[] = [
  {
    "id": "o7707-1.1-01",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Noura runs a bakery and wants to decide whether she can afford to open a second branch. Which activity gives her the information she needs for this decision?",
    "options": [
      "Sending invoices to credit customers",
      "Counting the cash in the till at closing time",
      "Using the business records to prepare and interpret financial statements",
      "Writing each day's cash sales into the cash book"
    ],
    "answer": 2,
    "explanation": "Recording daily transactions is book-keeping. Using those records to prepare and interpret financial statements is accounting, and that is what supports decisions about the future.",
    "optionFeedback": [
      "Sending invoices records credit sales. It gives no overall picture of profit or financial position.",
      "Counting the till is a cash control check. It shows one day's cash, not the business's performance.",
      "Correct. Recording daily transactions is book-keeping. Using those records to prepare and interpret financial statements is accounting, and that is what supports decisions about the future.",
      "This is book-keeping. It records one day's sales but does not show whether a second branch is affordable."
    ]
  },
  {
    "id": "o7707-1.1-02",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Which task is book-keeping rather than accounting?",
    "options": [
      "Preparing the statement of financial position",
      "Entering a credit sale in the sales journal",
      "Advising the owner how to reduce running costs",
      "Explaining to the owner why profit fell this year"
    ],
    "answer": 1,
    "explanation": "Book-keeping is the day-to-day recording of transactions. The other tasks use the records to report and advise, which is accounting.",
    "optionFeedback": [
      "Preparing financial statements from the records is accounting.",
      "Correct. Book-keeping is the day-to-day recording of transactions. The other tasks use the records to report and advise, which is accounting.",
      "Giving advice based on the records is accounting.",
      "Explaining why profit fell means analysing results, which is accounting."
    ]
  },
  {
    "id": "o7707-1.1-03",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Which financial statement shows what a business owns and owes at one point in time?",
    "options": [
      "Statement of profit or loss",
      "Sales journal",
      "Cash book",
      "Statement of financial position"
    ],
    "answer": 3,
    "explanation": "The statement of financial position lists assets, liabilities and owner's equity at a date. The statement of profit or loss covers a period.",
    "optionFeedback": [
      "The statement of profit or loss covers a period of time and shows income and expenses, not what is owned and owed.",
      "The sales journal is a book of prime entry listing credit sales.",
      "The cash book records cash and bank transactions only.",
      "Correct. The statement of financial position lists assets, liabilities and owner's equity at a date. The statement of profit or loss covers a period."
    ]
  },
  {
    "id": "o7707-1.1-04",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "medium",
    "question": "Tariq's statement of profit or loss shows a loss for the year. What does this tell him?",
    "options": [
      "His expenses for the year were greater than his income",
      "He took more drawings than he earned",
      "His bank account is overdrawn",
      "His liabilities are greater than his assets"
    ],
    "answer": 0,
    "explanation": "A loss means total expenses exceeded total income for the period. It says nothing directly about the bank balance or the net assets.",
    "optionFeedback": [
      "Correct. A loss means total expenses exceeded total income for the period. It says nothing directly about the bank balance or the net assets.",
      "Drawings are not expenses, so they do not create a loss.",
      "Profit is not the same as cash. A business can make a loss and still have money in the bank.",
      "Liabilities greater than assets describes the position at a date, not the result for the year."
    ]
  },
  {
    "id": "o7707-1.1-05",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Who mainly uses accounting information to monitor the progress of a business and decide how to improve it?",
    "options": [
      "The business's customers",
      "The owners and managers",
      "The bank that holds its account",
      "The business's competitors"
    ],
    "answer": 1,
    "explanation": "Owners and managers use accounting information to check progress and make decisions, such as how to increase profit or reduce a loss.",
    "optionFeedback": [
      "Customers are interested in the business continuing, not in managing it.",
      "Correct. Owners and managers use accounting information to check progress and make decisions, such as how to increase profit or reduce a loss.",
      "The bank is an outside user, not the people running the business.",
      "Competitors do not use the business's accounts to run it."
    ]
  },
  {
    "id": "o7707-1.1-06",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "What is the main purpose of book-keeping?",
    "options": [
      "To keep an accurate and complete record of every business transaction",
      "To decide how the business should grow",
      "To calculate the tax the business owes",
      "To set the selling prices of goods"
    ],
    "answer": 0,
    "explanation": "Book-keeping is the detailed, day-to-day recording of transactions. Accounting then uses those records.",
    "optionFeedback": [
      "Correct. Book-keeping is the detailed, day-to-day recording of transactions. Accounting then uses those records.",
      "Planning growth is a management decision that uses accounting information.",
      "Tax uses the records, but it is not the purpose of book-keeping.",
      "Pricing is a business decision, not a recording task."
    ]
  },
  {
    "id": "o7707-1.1-07",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Which statement describes accounting?",
    "options": [
      "Using financial records to prepare statements that help people make decisions",
      "Recording each transaction in a book of prime entry",
      "Giving receipts to customers",
      "Banking each day's takings"
    ],
    "answer": 0,
    "explanation": "Accounting uses the book-keeper's records to prepare and interpret financial statements.",
    "optionFeedback": [
      "Correct. Accounting uses the book-keeper's records to prepare and interpret financial statements.",
      "That is book-keeping.",
      "That is producing business documents.",
      "That is cash handling, not accounting."
    ]
  },
  {
    "id": "o7707-1.1-08",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "A trader compares this year's profit with last year's profit. Why does she do this?",
    "options": [
      "To monitor the progress of the business over time",
      "To find out how much cash is in the bank",
      "To record transactions in the right order",
      "To check the arithmetic of the ledger"
    ],
    "answer": 0,
    "explanation": "Comparing results across years shows whether the business is improving or getting worse.",
    "optionFeedback": [
      "Correct. Comparing results across years shows whether the business is improving or getting worse.",
      "Profit is not the same as cash.",
      "Recording transactions is book-keeping.",
      "The trial balance checks arithmetic."
    ]
  },
  {
    "id": "o7707-1.1-09",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Which information does a statement of profit or loss provide?",
    "options": [
      "The balance of each customer's account",
      "The assets owned at the year end",
      "The profit or loss made over a period",
      "The cash received each day"
    ],
    "answer": 2,
    "explanation": "The statement of profit or loss compares income and expenses for a period to find the profit or loss.",
    "optionFeedback": [
      "Customer balances are in the sales ledger.",
      "Assets are shown in the statement of financial position.",
      "Correct. The statement of profit or loss compares income and expenses for a period to find the profit or loss.",
      "Daily receipts are recorded in the cash book."
    ]
  },
  {
    "id": "o7707-1.1-10",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "medium",
    "question": "Why should a business record every transaction, however small?",
    "options": [
      "So that a trial balance is not needed",
      "So that the financial statements are complete and accurate",
      "So that it pays less tax",
      "Because small transactions are always capital expenditure"
    ],
    "answer": 1,
    "explanation": "Leaving out transactions, even small ones, makes profit and the financial position inaccurate.",
    "optionFeedback": [
      "A trial balance is still needed to check the double entry.",
      "Correct. Leaving out transactions, even small ones, makes profit and the financial position inaccurate.",
      "Recording transactions is about accuracy, not reducing tax.",
      "Most small transactions are revenue expenditure."
    ]
  },
  {
    "id": "o7707-1.1-11",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "medium",
    "question": "A shop owner says: 'My shop made a profit this year, so I must have more cash.' Why might she be wrong?",
    "options": [
      "Profit only exists after the business closes",
      "Profit can be tied up in inventory, money owed by customers or new assets",
      "Cash is never affected by trading",
      "Profit is always paid to the government"
    ],
    "answer": 1,
    "explanation": "Profit is measured on the accruals basis. Cash can be lower if money is used to buy assets or inventory, or if customers have not yet paid.",
    "optionFeedback": [
      "Profit is measured every period while the business operates.",
      "Correct. Profit is measured on the accruals basis. Cash can be lower if money is used to buy assets or inventory, or if customers have not yet paid.",
      "Trading affects cash all the time.",
      "Only tax is paid to the government, not the whole profit."
    ]
  },
  {
    "id": "o7707-1.1-12",
    "level": "O Level 7707",
    "topic": "1.1",
    "topicTitle": "The purpose of accounting",
    "difficulty": "easy",
    "question": "Which decision is made using accounting information?",
    "options": [
      "Which colour to paint the shop",
      "Whether to cut expenses to improve profit",
      "Which date the bank prints its statement",
      "Which customer to send an invoice to"
    ],
    "answer": 1,
    "explanation": "Accounting information shows income and expenses, so owners use it to decide how to improve profit.",
    "optionFeedback": [
      "This is not a financial decision.",
      "Correct. Accounting information shows income and expenses, so owners use it to decide how to improve profit.",
      "The bank decides this.",
      "Invoices follow from sales; this is routine record-keeping."
    ]
  },
  {
    "id": "o7707-1.2-01",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "A business has assets of $84 000 and owner's equity of $61 500. What are its liabilities?",
    "options": [
      "$22 500",
      "$61 500",
      "$84 000",
      "$145 500"
    ],
    "answer": 0,
    "explanation": "Liabilities = assets minus owner's equity = $84 000 minus $61 500 = $22 500.",
    "optionFeedback": [
      "Correct. Liabilities = assets minus owner's equity = $84 000 minus $61 500 = $22 500.",
      "This is the owner's equity, not the liabilities.",
      "This is the total of assets.",
      "This adds assets and owner's equity instead of subtracting."
    ]
  },
  {
    "id": "o7707-1.2-02",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "A business repays $3000 of a bank loan by bank transfer. What is the effect on the accounting equation?",
    "options": [
      "assets no effect, owner's equity no effect, liabilities minus $3000",
      "assets minus $3000, owner's equity minus $3000, liabilities no effect",
      "assets minus $3000, owner's equity no effect, liabilities minus $3000",
      "assets plus $3000, owner's equity no effect, liabilities minus $3000"
    ],
    "answer": 2,
    "explanation": "The bank balance (an asset) falls and the loan (a liability) falls by the same amount. Owner's equity is not affected.",
    "optionFeedback": [
      "Money leaves the bank, so assets do fall.",
      "Repaying a loan is not an expense, so owner's equity does not change.",
      "Correct. The bank balance (an asset) falls and the loan (a liability) falls by the same amount. Owner's equity is not affected.",
      "Money leaves the bank, so assets decrease, not increase."
    ]
  },
  {
    "id": "o7707-1.2-03",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "Hina gives her own car, valued at $9000, to her business for permanent business use. What is the effect on the business?",
    "options": [
      "Assets increase and owner's equity increases",
      "Assets decrease and owner's equity decreases",
      "Assets increase and liabilities increase",
      "There is no effect because no cash was paid"
    ],
    "answer": 0,
    "explanation": "The car becomes a business asset and Hina's capital increases by its value. Capital can be introduced in a form other than cash.",
    "optionFeedback": [
      "Correct. The car becomes a business asset and Hina's capital increases by its value. Capital can be introduced in a form other than cash.",
      "The business gains an asset, it does not lose one.",
      "Nothing is owed to an outsider. The owner's contribution is capital, not a liability.",
      "Capital can be introduced in a form other than cash, such as a car."
    ]
  },
  {
    "id": "o7707-1.2-04",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "hard",
    "question": "A trader buys goods for $1200 on credit and later in the month sells all of them for $1800 cash. What is the overall effect on the accounting equation?",
    "options": [
      "assets plus $600, owner's equity plus $600, liabilities no effect",
      "assets plus $1800, owner's equity plus $1800, liabilities no effect",
      "assets plus $3000, owner's equity plus $1800, liabilities plus $1200",
      "assets plus $1800, owner's equity plus $600, liabilities plus $1200"
    ],
    "answer": 3,
    "explanation": "Inventory goes up $1200 then down $1200, and cash goes up $1800, so assets rise $1800. The supplier is owed $1200. The $600 profit increases owner's equity. Check: 1800 = 600 + 1200.",
    "optionFeedback": [
      "Assets rise by the full $1800 cash received, not just the profit. The supplier is also still owed $1200.",
      "The supplier is still owed $1200, and only the $600 profit increases owner's equity.",
      "The inventory was sold, so it cannot be counted as well as the cash received.",
      "Correct. Inventory goes up $1200 then down $1200, and cash goes up $1800, so assets rise $1800. The supplier is owed $1200. The $600 profit increases owner's equity. Check: 1800 = 600 + 1200."
    ]
  },
  {
    "id": "o7707-1.2-05",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "Which item is an asset?",
    "options": [
      "Wages owing to staff",
      "Insurance paid in advance",
      "Owner's capital",
      "Bank overdraft"
    ],
    "answer": 1,
    "explanation": "A prepaid expense is an asset because the business will receive the benefit later. The other items are liabilities or owner's equity.",
    "optionFeedback": [
      "Wages owing are a liability.",
      "Correct. A prepaid expense is an asset because the business will receive the benefit later. The other items are liabilities or owner's equity.",
      "Owner's capital is owner's equity, not an asset.",
      "A bank overdraft is money owed to the bank, a liability."
    ]
  },
  {
    "id": "o7707-1.2-06",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "A business has owner's equity of $52 000 and liabilities of $18 500. What are its total assets?",
    "options": [
      "$18 500",
      "$33 500",
      "$52 000",
      "$70 500"
    ],
    "answer": 3,
    "explanation": "Assets = owner's equity + liabilities = 52 000 + 18 500 = $70 500.",
    "optionFeedback": [
      "These are the liabilities only.",
      "This subtracts liabilities from equity. Assets equal equity plus liabilities.",
      "This is owner's equity only.",
      "Correct. Assets = owner's equity + liabilities = 52 000 + 18 500 = $70 500."
    ]
  },
  {
    "id": "o7707-1.2-07",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "medium",
    "question": "A customer pays $700 that he owes to the business by bank transfer. What is the effect on the accounting equation?",
    "options": [
      "Assets decrease by $700 and owner's equity decreases by $700",
      "Assets increase by $700 and owner's equity increases by $700",
      "Assets increase by $700 and liabilities increase by $700",
      "Total assets, liabilities and owner's equity are all unchanged"
    ],
    "answer": 3,
    "explanation": "Bank goes up $700 and trade receivables go down $700, so total assets do not change.",
    "optionFeedback": [
      "No asset is lost. The money owed has turned into money in the bank.",
      "No profit is made. One asset (bank) rises and another (trade receivables) falls.",
      "Nothing new is owed by the business.",
      "Correct. Bank goes up $700 and trade receivables go down $700, so total assets do not change."
    ]
  },
  {
    "id": "o7707-1.2-08",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "The owner withdraws $500 cash from the business for personal use. What is the effect?",
    "options": [
      "Assets decrease by $500 with no other effect",
      "Owner's equity decreases by $500 and liabilities increase by $500",
      "Assets decrease by $500 and liabilities decrease by $500",
      "Assets decrease by $500 and owner's equity decreases by $500"
    ],
    "answer": 3,
    "explanation": "Cash falls and drawings reduce the owner's equity by the same amount.",
    "optionFeedback": [
      "The equation would not balance. Drawings also reduce owner's equity.",
      "Cash is taken out, so assets fall. Nothing is borrowed.",
      "Drawings do not reduce what the business owes to outsiders.",
      "Correct. Cash falls and drawings reduce the owner's equity by the same amount."
    ]
  },
  {
    "id": "o7707-1.2-09",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "medium",
    "question": "A business pays rent of $1200 by bank transfer. What is the effect on the accounting equation?",
    "options": [
      "Liabilities increase by $1200 and owner's equity decreases by $1200",
      "Assets decrease by $1200 and liabilities decrease by $1200",
      "Assets decrease by $1200 and owner's equity decreases by $1200",
      "Assets decrease by $1200 and owner's equity is unchanged"
    ],
    "answer": 2,
    "explanation": "The bank balance falls. The expense reduces profit, which reduces owner's equity.",
    "optionFeedback": [
      "The rent was paid, so no liability is created.",
      "Rent was not owed beforehand, so no liability is reduced.",
      "Correct. The bank balance falls. The expense reduces profit, which reduces owner's equity.",
      "Rent is an expense, which reduces profit and so owner's equity."
    ]
  },
  {
    "id": "o7707-1.2-10",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "easy",
    "question": "Which item is a liability?",
    "options": [
      "An amount owed to a supplier for goods",
      "Drawings",
      "An amount owed by a customer",
      "Inventory"
    ],
    "answer": 0,
    "explanation": "A liability is an amount the business owes, such as trade payables.",
    "optionFeedback": [
      "Correct. A liability is an amount the business owes, such as trade payables.",
      "Drawings reduce owner's equity; they are not owed to anyone.",
      "An amount owed to the business is an asset.",
      "Inventory is an asset."
    ]
  },
  {
    "id": "o7707-1.2-11",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "hard",
    "question": "At the start of the year a business had assets of $60 000 and liabilities of $20 000. During the year it made a profit of $15 000 and the owner took drawings of $6000. What is owner's equity at the end of the year?",
    "options": [
      "$34 000",
      "$49 000",
      "$55 000",
      "$69 000"
    ],
    "answer": 1,
    "explanation": "Opening equity = 60 000 minus 20 000 = 40 000. Closing = 40 000 + 15 000 minus 6000 = $49 000.",
    "optionFeedback": [
      "This deducts drawings but forgets to add the profit.",
      "Correct. Opening equity = 60 000 minus 20 000 = 40 000. Closing = 40 000 + 15 000 minus 6000 = $49 000.",
      "This adds the profit but forgets the drawings.",
      "This starts from total assets instead of owner's equity."
    ]
  },
  {
    "id": "o7707-1.2-12",
    "level": "O Level 7707",
    "topic": "1.2",
    "topicTitle": "The accounting equation",
    "difficulty": "hard",
    "question": "A business buys equipment for $4000. It pays $1000 by bank transfer and owes the rest to the supplier. What is the effect on the accounting equation?",
    "options": [
      "Assets increase by $4000 and liabilities increase by $4000",
      "Assets increase by $3000 and liabilities increase by $3000",
      "Assets increase by $4000, liabilities increase by $3000 and owner's equity increases by $1000",
      "Assets increase by $3000 and owner's equity increases by $3000"
    ],
    "answer": 1,
    "explanation": "Equipment +4000 and bank minus 1000 gives assets +3000. The supplier is owed $3000.",
    "optionFeedback": [
      "This forgets that $1000 left the bank.",
      "Correct. Equipment +4000 and bank minus 1000 gives assets +3000. The supplier is owed $3000.",
      "Owner's equity does not change. The bank payment reduces assets instead.",
      "The $3000 is owed to the supplier, so it is a liability."
    ]
  },
  {
    "id": "o7707-2.1-01",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "A business pays its supplier, Al Noor Traders, $950 by bank transfer. What is the double entry?",
    "options": [
      "Debit purchases, credit bank",
      "Debit Al Noor Traders, credit purchases",
      "Debit Al Noor Traders, credit bank",
      "Debit bank, credit Al Noor Traders"
    ],
    "answer": 2,
    "explanation": "The amount owed to the supplier falls, so the supplier's account is debited. Money leaves the bank, so bank is credited.",
    "optionFeedback": [
      "Purchases were recorded when the goods were bought. This transaction pays off the debt.",
      "The payment comes out of the bank, so bank must be credited, not purchases.",
      "Correct. The amount owed to the supplier falls, so the supplier's account is debited. Money leaves the bank, so bank is credited.",
      "This is the wrong way round. It would record money received from the supplier."
    ]
  },
  {
    "id": "o7707-2.1-02",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "A wholesaler sells goods on credit to Hassan for $640. What is the double entry in the wholesaler's books?",
    "options": [
      "Debit Hassan, credit purchases",
      "Debit bank, credit sales",
      "Debit sales, credit Hassan",
      "Debit Hassan, credit sales"
    ],
    "answer": 3,
    "explanation": "Hassan now owes the wholesaler, so his account is debited. Sales income is credited.",
    "optionFeedback": [
      "Selling goods is recorded in sales, not purchases.",
      "This is a credit sale, so no money has been received yet.",
      "This is the wrong way round. Hassan owes money, so his account is debited.",
      "Correct. Hassan now owes the wholesaler, so his account is debited. Sales income is credited."
    ]
  },
  {
    "id": "o7707-2.1-03",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "medium",
    "question": "The account of Qamar Stores appears in the ledger of a wholesaler.",
    "options": [
      "On 1 May the wholesaler owed Qamar Stores $500",
      "On 20 May the wholesaler paid Qamar Stores $1000",
      "On 31 May Qamar Stores owed the wholesaler $550",
      "On 9 May the wholesaler returned goods to Qamar Stores"
    ],
    "answer": 2,
    "explanation": "Qamar Stores is a customer: a debit balance means it owes the wholesaler. The returns and the bank entry on the credit side are goods sent back by Qamar Stores and money received from it.",
    "optionFeedback": [
      "A debit balance brought down means Qamar Stores owed the wholesaler.",
      "Bank on the credit side of a customer's account means money received from Qamar Stores.",
      "Correct. Qamar Stores is a customer: a debit balance means it owes the wholesaler. The returns and the bank entry on the credit side are goods sent back by Qamar Stores and money received from it.",
      "Sales returns on the credit side mean Qamar Stores returned goods to the wholesaler."
    ],
    "table": {
      "headers": [
        "Qamar Stores account",
        "$",
        "",
        "$"
      ],
      "rows": [
        [
          "May 1 balance b/d",
          "500",
          "May 9 sales returns",
          "150"
        ],
        [
          "May 5 sales",
          "1200",
          "May 20 bank",
          "1000"
        ],
        [
          "",
          "",
          "May 31 balance c/d",
          "550"
        ],
        [
          "",
          "1700",
          "",
          "1700"
        ]
      ]
    }
  },
  {
    "id": "o7707-2.1-04",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "medium",
    "question": "Faisal takes goods from his shop for his family. The goods cost $250 and would normally sell for $400. What is the correct double entry?",
    "options": [
      "Debit drawings $400, credit purchases $400",
      "Debit drawings $250, credit purchases $250",
      "Debit drawings $400, credit sales $400",
      "Debit purchases $250, credit drawings $250"
    ],
    "answer": 1,
    "explanation": "Goods taken by the owner are recorded at cost. Drawings increase (debit) and purchases are reduced (credit).",
    "optionFeedback": [
      "The correct accounts, but goods taken are recorded at cost, $250, not selling price.",
      "Correct. Goods taken by the owner are recorded at cost. Drawings increase (debit) and purchases are reduced (credit).",
      "Goods taken by the owner are not a sale, and they are recorded at cost, not selling price.",
      "This is the wrong way round. Drawings increase, so drawings is debited."
    ]
  },
  {
    "id": "o7707-2.1-05",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "medium",
    "question": "A customer's account in a computerised sales ledger shows a running balance of $700 debit. An invoice for $300 and a receipt of $500 are then recorded. What is the new running balance?",
    "options": [
      "$500 credit",
      "$500 debit",
      "$900 debit",
      "$1500 debit"
    ],
    "answer": 1,
    "explanation": "Invoice increases the amount owed: 700 + 300 = 1000. Receipt reduces it: 1000 minus 500 = 500, still owed by the customer, so a debit balance.",
    "optionFeedback": [
      "The customer still owes money, so the balance is a debit, not a credit.",
      "Correct. Invoice increases the amount owed: 700 + 300 = 1000. Receipt reduces it: 1000 minus 500 = 500, still owed by the customer, so a debit balance.",
      "This treats the invoice as reducing the balance and the receipt as increasing it.",
      "The receipt was added instead of deducted."
    ]
  },
  {
    "id": "o7707-2.1-06",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "In which ledger is the account of a credit supplier kept?",
    "options": [
      "Purchases ledger",
      "Sales ledger",
      "Nominal ledger",
      "Cash book"
    ],
    "answer": 0,
    "explanation": "Personal accounts of credit suppliers are kept in the purchases ledger. Customers are in the sales ledger; income and expense accounts are in the nominal ledger.",
    "optionFeedback": [
      "Correct. Personal accounts of credit suppliers are kept in the purchases ledger. Customers are in the sales ledger; income and expense accounts are in the nominal ledger.",
      "The sales ledger holds the accounts of credit customers.",
      "The nominal ledger holds income, expense, asset and capital accounts.",
      "The cash book records cash and bank transactions."
    ]
  },
  {
    "id": "o7707-2.1-07",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "The owner transfers $2000 from her personal savings to the business bank account. What is the double entry?",
    "options": [
      "Debit bank, credit loan",
      "Debit bank, credit sales",
      "Debit capital, credit bank",
      "Debit bank, credit capital"
    ],
    "answer": 3,
    "explanation": "Bank increases (debit) and the owner's capital increases (credit).",
    "optionFeedback": [
      "The owner is investing, not lending.",
      "Money from the owner is capital, not a sale.",
      "This is the wrong way round. Money comes into the bank, so bank is debited.",
      "Correct. Bank increases (debit) and the owner's capital increases (credit)."
    ]
  },
  {
    "id": "o7707-2.1-08",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "A business returns faulty goods costing $180 to its supplier, Zahid. What is the double entry?",
    "options": [
      "Debit Zahid, credit purchases",
      "Debit sales returns, credit Zahid",
      "Debit Zahid, credit purchases returns",
      "Debit purchases returns, credit Zahid"
    ],
    "answer": 2,
    "explanation": "The amount owed to the supplier falls (debit Zahid). The returns are credited to purchases returns.",
    "optionFeedback": [
      "Returns to suppliers are kept in a separate purchases returns account.",
      "Sales returns are goods sent back by customers.",
      "Correct. The amount owed to the supplier falls (debit Zahid). The returns are credited to purchases returns.",
      "This is the wrong way round. The amount owed to Zahid falls, so his account is debited."
    ]
  },
  {
    "id": "o7707-2.1-09",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "A business pays rent of $600 in cash. What is the double entry?",
    "options": [
      "Debit rent, credit cash",
      "Debit rent, credit capital",
      "Debit capital, credit cash",
      "Debit cash, credit rent"
    ],
    "answer": 0,
    "explanation": "The rent expense is debited and the cash account is credited.",
    "optionFeedback": [
      "Correct. The rent expense is debited and the cash account is credited.",
      "The rent was paid in cash, not by the owner personally.",
      "Rent is a business expense, not drawings.",
      "This is the wrong way round. Cash leaves the business, so cash is credited."
    ]
  },
  {
    "id": "o7707-2.1-10",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "medium",
    "question": "A supplier's account in a trader's purchases ledger shows the following. What does the balance show?",
    "options": [
      "The trader owes Raza $700",
      "The trader owes Raza $900",
      "The trader owes Raza $2400",
      "Raza owes the trader $700"
    ],
    "answer": 0,
    "explanation": "2400 minus 1500 minus 200 = $700 credit, an amount owed to the supplier.",
    "optionFeedback": [
      "Correct. 2400 minus 1500 minus 200 = $700 credit, an amount owed to the supplier.",
      "This forgets the purchases returns of $200.",
      "This is the total purchased. Payments and returns reduce it.",
      "A credit balance on a supplier's account is an amount the trader owes."
    ],
    "table": {
      "headers": [
        "Raza account",
        "$",
        "",
        "$"
      ],
      "rows": [
        [
          "bank",
          "1 500",
          "purchases",
          "2 400"
        ],
        [
          "purchases returns",
          "200",
          "",
          ""
        ]
      ]
    }
  },
  {
    "id": "o7707-2.1-11",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "easy",
    "question": "Which account is kept in the nominal ledger?",
    "options": [
      "Rent received",
      "Customer Salman",
      "Supplier Al Rawabi",
      "Bank (kept in the cash book)"
    ],
    "answer": 0,
    "explanation": "The nominal ledger holds income, expense, asset and capital accounts such as rent received.",
    "optionFeedback": [
      "Correct. The nominal ledger holds income, expense, asset and capital accounts such as rent received.",
      "Customers' accounts are kept in the sales ledger.",
      "Suppliers' accounts are kept in the purchases ledger.",
      "The bank account is kept in the cash book."
    ]
  },
  {
    "id": "o7707-2.1-12",
    "level": "O Level 7707",
    "topic": "2.1",
    "topicTitle": "The double entry system of book-keeping",
    "difficulty": "medium",
    "question": "At the year end, the balance on the wages account is transferred to the statement of profit or loss. What is the entry?",
    "options": [
      "Debit statement of profit or loss, credit wages",
      "Debit wages, credit statement of profit or loss",
      "Debit wages, credit bank",
      "Debit capital, credit wages"
    ],
    "answer": 0,
    "explanation": "The debit balance on wages is cleared by a credit, and the expense is debited to the statement of profit or loss.",
    "optionFeedback": [
      "Correct. The debit balance on wages is cleared by a credit, and the expense is debited to the statement of profit or loss.",
      "This is the wrong way round and would treat wages as income.",
      "That would record another payment of wages.",
      "Wages are a business expense, not drawings."
    ]
  },
  {
    "id": "o7707-2.2-01",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "A supplier finds that it overcharged a customer on an invoice. Which document does the supplier send to reduce the amount owed?",
    "options": [
      "Statement of account",
      "Receipt",
      "Credit note",
      "Debit note"
    ],
    "answer": 2,
    "explanation": "A credit note is issued by the seller to reduce the amount the customer owes, for example after an overcharge or a return.",
    "optionFeedback": [
      "A statement of account summarises transactions. It does not itself reduce the amount owed.",
      "A receipt confirms that money has been received.",
      "Correct. A credit note is issued by the seller to reduce the amount the customer owes, for example after an overcharge or a return.",
      "A debit note is sent by the buyer, not the seller."
    ]
  },
  {
    "id": "o7707-2.2-02",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "medium",
    "question": "Goods arrive at a shop damaged. Before the supplier has issued anything, which document can the shop send to the supplier to request a reduction?",
    "options": [
      "Credit note",
      "Debit note",
      "Paying-in slip",
      "Invoice"
    ],
    "answer": 1,
    "explanation": "A debit note is sent by the buyer to ask the seller for a credit. The seller then confirms it with a credit note.",
    "optionFeedback": [
      "A credit note is issued by the seller, not the buyer.",
      "Correct. A debit note is sent by the buyer to ask the seller for a credit. The seller then confirms it with a credit note.",
      "A paying-in slip is used to deposit money at the bank.",
      "An invoice is sent by the seller to charge for goods."
    ]
  },
  {
    "id": "o7707-2.2-03",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "Which document does a supplier send each month to show a customer's invoices, credit notes, payments and the balance owing?",
    "options": [
      "Statement of account",
      "Cheque counterfoil",
      "Credit note",
      "Bank statement"
    ],
    "answer": 0,
    "explanation": "A statement of account summarises the customer's transactions for the period and the balance owing at the end.",
    "optionFeedback": [
      "Correct. A statement of account summarises the customer's transactions for the period and the balance owing at the end.",
      "A cheque counterfoil is the business's record of a cheque it has written.",
      "A credit note covers one reduction, not the whole month.",
      "A bank statement comes from the bank and covers the business's bank account."
    ]
  },
  {
    "id": "o7707-2.2-04",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "Which document is the source for recording a cash sale in the cash book?",
    "options": [
      "A sales invoice",
      "A debit note",
      "A copy of the receipt given to the customer",
      "A statement of account"
    ],
    "answer": 2,
    "explanation": "A cash sale is supported by a receipt. Invoices are for credit sales.",
    "optionFeedback": [
      "An invoice is used for credit sales.",
      "A debit note is sent by a buyer to request a reduction.",
      "Correct. A cash sale is supported by a receipt. Invoices are for credit sales.",
      "A statement of account is a monthly summary for credit customers."
    ]
  },
  {
    "id": "o7707-2.2-05",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "A business pays a supplier by cheque. Which document does it keep as its own record of the payment?",
    "options": [
      "Credit note",
      "Invoice",
      "Paying-in slip",
      "Cheque counterfoil"
    ],
    "answer": 3,
    "explanation": "The counterfoil stays in the cheque book and is the source document for entering the payment in the cash book.",
    "optionFeedback": [
      "A credit note reduces an amount owed for goods.",
      "An invoice is sent by a seller to charge for goods.",
      "A paying-in slip records money deposited at the bank.",
      "Correct. The counterfoil stays in the cheque book and is the source document for entering the payment in the cash book."
    ]
  },
  {
    "id": "o7707-2.2-06",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "Which document does a buyer use to record a credit purchase in the purchases journal?",
    "options": [
      "A statement of account",
      "A receipt",
      "A credit note",
      "The supplier's invoice"
    ],
    "answer": 3,
    "explanation": "Each credit purchase is recorded from the invoice received from the supplier.",
    "optionFeedback": [
      "A statement summarises the month; each purchase is recorded from its invoice.",
      "A receipt is for a cash payment.",
      "A credit note records a reduction, such as a return.",
      "Correct. Each credit purchase is recorded from the invoice received from the supplier."
    ]
  },
  {
    "id": "o7707-2.2-07",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "medium",
    "question": "Which item would a business usually find out about first from its bank statement?",
    "options": [
      "Cheques it has written",
      "Cash sales",
      "Bank charges",
      "Credit sales"
    ],
    "answer": 2,
    "explanation": "Bank charges, interest and some direct debits or credit transfers are first seen on the bank statement.",
    "optionFeedback": [
      "The business already knows about these from its counterfoils.",
      "The business records these from its own receipts.",
      "Correct. Bank charges, interest and some direct debits or credit transfers are first seen on the bank statement.",
      "Credit sales are recorded from invoices in the sales journal."
    ]
  },
  {
    "id": "o7707-2.2-08",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "Where is a trade discount shown?",
    "options": [
      "On the statement of account only",
      "In the discount column of the cash book",
      "In the discount allowed account",
      "On the invoice, deducted from the list price"
    ],
    "answer": 3,
    "explanation": "Trade discount is deducted on the invoice, and only the net amount is recorded in the books.",
    "optionFeedback": [
      "The trade discount is deducted on the invoice itself.",
      "The cash book records cash discounts, not trade discounts.",
      "Trade discount is never recorded in a ledger account.",
      "Correct. Trade discount is deducted on the invoice, and only the net amount is recorded in the books."
    ]
  },
  {
    "id": "o7707-2.2-09",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "What is a paying-in slip used for?",
    "options": [
      "As evidence of money deposited into the bank",
      "To ask a supplier for a reduction",
      "As a record of a cheque written by the business",
      "As the bank's monthly record of the account"
    ],
    "answer": 0,
    "explanation": "The paying-in slip lists the cash and cheques paid in. The business keeps the counterfoil as its source document.",
    "optionFeedback": [
      "Correct. The paying-in slip lists the cash and cheques paid in. The business keeps the counterfoil as its source document.",
      "That is a debit note.",
      "That is a cheque counterfoil.",
      "That is a bank statement."
    ]
  },
  {
    "id": "o7707-2.2-10",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "medium",
    "question": "A business emails its invoices as PDF files instead of printing them. Which statement is correct?",
    "options": [
      "Only paper invoices can be used as source documents",
      "Emailed invoices replace the need for a sales journal",
      "The emailed invoice is still the source document for recording the sale",
      "An emailed invoice does not need to be recorded"
    ],
    "answer": 2,
    "explanation": "Business documents can be produced manually or digitally. They are still the evidence for recording transactions.",
    "optionFeedback": [
      "A digital invoice is just as valid a source document.",
      "Credit sales are still recorded in the sales journal or its digital equivalent.",
      "Correct. Business documents can be produced manually or digitally. They are still the evidence for recording transactions.",
      "Every credit sale must be recorded, however the invoice is sent."
    ]
  },
  {
    "id": "o7707-2.2-11",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "hard",
    "question": "A supplier's statement of account shows a balance of $1350. The business's own account for this supplier shows $1200. Which item would explain the difference?",
    "options": [
      "An invoice recorded by the business but not yet shown on the statement",
      "A payment shown on the statement but not yet recorded by the business",
      "A discount shown on the statement but not yet recorded by the business",
      "A credit note from the supplier recorded by the business but not yet shown on the statement"
    ],
    "answer": 3,
    "explanation": "The credit note reduced the business's balance to $1200. The supplier has not yet included it, so the statement still shows $1350.",
    "optionFeedback": [
      "This would make the business's balance higher than the statement, not lower.",
      "This would make the statement lower than the business's balance.",
      "This would also make the statement lower than the business's balance.",
      "Correct. The credit note reduced the business's balance to $1200. The supplier has not yet included it, so the statement still shows $1350."
    ]
  },
  {
    "id": "o7707-2.2-12",
    "level": "O Level 7707",
    "topic": "2.2",
    "topicTitle": "Business documents",
    "difficulty": "easy",
    "question": "Which document does a seller give a customer who pays in cash at the counter?",
    "options": [
      "Receipt",
      "Debit note",
      "Statement of account",
      "Invoice"
    ],
    "answer": 0,
    "explanation": "A receipt is evidence that payment has been received.",
    "optionFeedback": [
      "Correct. A receipt is evidence that payment has been received.",
      "A debit note is sent by a buyer to request a reduction.",
      "A statement is sent to credit customers each month.",
      "An invoice is used when goods are sold on credit."
    ]
  },
  {
    "id": "o7707-2.3-01",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "A business keeps a petty cash imprest of $300. During July the petty cashier paid postage $46, cleaning $85 and taxi fares $64. $20 of the taxi fares was for a staff member's personal journey, and she repaid the $20 into petty cash. What amount must the petty cashier receive on 1 August to bring the float back to $300?",
    "options": [
      "$105",
      "$175",
      "$195",
      "$215"
    ],
    "answer": 1,
    "explanation": "Payments total 46 + 85 + 64 = $195. The $20 repaid has already been put back, so only 195 minus 20 = $175 is needed to bring petty cash back to $300.",
    "optionFeedback": [
      "This is 300 minus 195, the cash that would be left if the $20 had not been repaid. It is not the top-up needed.",
      "Correct. Payments total 46 + 85 + 64 = $195. The $20 repaid has already been put back, so only 195 minus 20 = $175 is needed to bring petty cash back to $300.",
      "This ignores the $20 that was repaid into petty cash.",
      "This adds the $20 repaid instead of deducting it."
    ]
  },
  {
    "id": "o7707-2.3-02",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "A supplier's list price for goods is $2000. The business receives a trade discount of 10% and is offered a cash discount of 5% for payment within 14 days. What amount is entered in the purchases journal?",
    "options": [
      "$1710",
      "$1800",
      "$1900",
      "$2000"
    ],
    "answer": 1,
    "explanation": "Trade discount is deducted before recording: 2000 minus 10% = $1800. Cash discount is not entered in the purchases journal; it is recorded only when payment is made.",
    "optionFeedback": [
      "Cash discount is only recorded when payment is made, not in the purchases journal.",
      "Correct. Trade discount is deducted before recording: 2000 minus 10% = $1800. Cash discount is not entered in the purchases journal; it is recorded only when payment is made.",
      "This deducts 5% instead of the 10% trade discount.",
      "This is the list price. Trade discount must be deducted first."
    ]
  },
  {
    "id": "o7707-2.3-03",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "Using the same purchase (list price $2000, 10% trade discount, 5% cash discount for payment within 14 days), how much does the business pay if it pays within 14 days?",
    "options": [
      "$1700",
      "$1710",
      "$1800",
      "$1900"
    ],
    "answer": 1,
    "explanation": "Invoice amount after trade discount is $1800. Cash discount 5% of 1800 = $90, so the payment is $1710.",
    "optionFeedback": [
      "This takes 15% off the list price in one step. The cash discount is 5% of the invoice amount after trade discount.",
      "Correct. Invoice amount after trade discount is $1800. Cash discount 5% of 1800 = $90, so the payment is $1710.",
      "This is the invoice amount. It forgets the 5% cash discount for paying early.",
      "This deducts only the cash discount from the list price and ignores the trade discount."
    ]
  },
  {
    "id": "o7707-2.3-04",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "easy",
    "question": "In which book of prime entry is the return of goods by a credit customer recorded?",
    "options": [
      "Cash book",
      "Purchases returns journal",
      "Sales returns journal",
      "Sales journal"
    ],
    "answer": 2,
    "explanation": "Goods returned by customers are returns inwards, recorded in the sales returns journal from the credit note issued.",
    "optionFeedback": [
      "No cash is involved in a return of goods on credit.",
      "The purchases returns journal records goods the business sends back to its suppliers.",
      "Correct. Goods returned by customers are returns inwards, recorded in the sales returns journal from the credit note issued.",
      "The sales journal records credit sales, not returns."
    ]
  },
  {
    "id": "o7707-2.3-05",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "Which transaction is recorded in the general journal?",
    "options": [
      "A cash sale",
      "Purchase of a delivery van on credit",
      "Purchase of goods for resale on credit",
      "Payment of wages by bank transfer"
    ],
    "answer": 1,
    "explanation": "The general journal records transactions with no other book of prime entry, such as buying a non-current asset on credit. Credit purchases of goods go in the purchases journal; cash and bank items go in the cash book.",
    "optionFeedback": [
      "Cash sales are recorded in the cash book.",
      "Correct. The general journal records transactions with no other book of prime entry, such as buying a non-current asset on credit. Credit purchases of goods go in the purchases journal; cash and bank items go in the cash book.",
      "Credit purchases of goods for resale are recorded in the purchases journal.",
      "Payments by bank are recorded in the cash book."
    ]
  },
  {
    "id": "o7707-2.3-06",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "easy",
    "question": "What is an advantage of using the imprest system for petty cash?",
    "options": [
      "Business expenses will be lower",
      "Petty cash never needs to be checked",
      "The main cashier does not have to record many small payments",
      "Receipts for small payments are no longer needed"
    ],
    "answer": 2,
    "explanation": "The imprest system moves small payments to the petty cashier and makes checking easy, because cash plus vouchers always equals the imprest.",
    "optionFeedback": [
      "The imprest system controls how payments are recorded. It does not reduce expenses.",
      "Petty cash still needs checking. The imprest system actually makes checking easier.",
      "Correct. The imprest system moves small payments to the petty cashier and makes checking easy, because cash plus vouchers always equals the imprest.",
      "Every petty cash payment still needs a voucher or receipt."
    ]
  },
  {
    "id": "o7707-2.3-07",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "The total of the discount allowed column in the cash book is posted at the end of the month. Where is it posted?",
    "options": [
      "To the debit of the discount received account",
      "To the credit of the discount allowed account",
      "To the debit of the discount allowed account",
      "To the credit of the sales account"
    ],
    "answer": 2,
    "explanation": "Discount allowed is an expense, so the total is debited to the discount allowed account. Each customer's account has already been credited individually.",
    "optionFeedback": [
      "Discount received is a different account, for discounts given by suppliers.",
      "Discount allowed is an expense, so it is debited, not credited.",
      "Correct. Discount allowed is an expense, so the total is debited to the discount allowed account. Each customer's account has already been credited individually.",
      "Discount allowed is not posted to the sales account."
    ]
  },
  {
    "id": "o7707-2.3-08",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "easy",
    "question": "A petty cashier has an imprest of $250. At the end of the month the petty cash box holds $38 and vouchers totalling $212. How much is transferred to restore the imprest?",
    "options": [
      "$38",
      "$212",
      "$250",
      "$288"
    ],
    "answer": 1,
    "explanation": "The amount spent, shown by the vouchers, is replaced: $212. Check: 38 + 212 = 250.",
    "optionFeedback": [
      "This is the cash left in the box, not the amount needed.",
      "Correct. The amount spent, shown by the vouchers, is replaced: $212. Check: 38 + 212 = 250.",
      "This is the whole imprest. Only the amount spent is replaced.",
      "This adds the cash left to the vouchers."
    ]
  },
  {
    "id": "o7707-2.3-09",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "A customer owing $800 pays by bank transfer within the discount period and takes a 2.5% cash discount. What is entered in the bank column of the cash book?",
    "options": [
      "$20",
      "$780",
      "$800",
      "$820"
    ],
    "answer": 1,
    "explanation": "Discount = 2.5% of 800 = $20. Amount received = 800 minus 20 = $780.",
    "optionFeedback": [
      "This is the discount, entered in the discount allowed column.",
      "Correct. Discount = 2.5% of 800 = $20. Amount received = 800 minus 20 = $780.",
      "This is the full debt. The customer pays less because of the discount.",
      "This adds the discount instead of deducting it."
    ]
  },
  {
    "id": "o7707-2.3-10",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "easy",
    "question": "Which book of prime entry records credit purchases of goods for resale?",
    "options": [
      "General journal",
      "Purchases ledger",
      "Purchases journal",
      "Cash book"
    ],
    "answer": 2,
    "explanation": "Credit purchases of goods are listed from suppliers' invoices in the purchases journal.",
    "optionFeedback": [
      "The general journal is for items with no other book of prime entry.",
      "A ledger is not a book of prime entry.",
      "Correct. Credit purchases of goods are listed from suppliers' invoices in the purchases journal.",
      "No money is paid at the time of a credit purchase."
    ]
  },
  {
    "id": "o7707-2.3-11",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "medium",
    "question": "Which column of a cash book can never have a credit balance?",
    "options": [
      "Neither column can ever have a balance",
      "The bank column, because banks never allow overdrafts",
      "Both columns, because they always show money owed",
      "The cash column, because a business cannot pay out more cash than it holds"
    ],
    "answer": 3,
    "explanation": "Cash in hand cannot go below zero. A bank account can be overdrawn, giving a credit balance.",
    "optionFeedback": [
      "Both columns are balanced and carried down.",
      "The bank column can show a credit balance when the account is overdrawn.",
      "Both columns usually have debit balances.",
      "Correct. Cash in hand cannot go below zero. A bank account can be overdrawn, giving a credit balance."
    ]
  },
  {
    "id": "o7707-2.3-12",
    "level": "O Level 7707",
    "topic": "2.3",
    "topicTitle": "Books of prime entry",
    "difficulty": "easy",
    "question": "A trader pays $500 of office cash into the business bank account. How is this recorded in the cash book?",
    "options": [
      "Debit the cash column, credit sales",
      "Debit the bank column, credit capital",
      "Debit the cash column, credit the bank column",
      "Debit the bank column, credit the cash column"
    ],
    "answer": 3,
    "explanation": "This is a contra entry: both sides are in the cash book, cash decreases and bank increases.",
    "optionFeedback": [
      "No sale has taken place.",
      "The money already belongs to the business, so capital does not change.",
      "This is the wrong way round. Cash goes down and bank goes up.",
      "Correct. This is a contra entry: both sides are in the cash book, cash decreases and bank increases."
    ]
  },
  {
    "id": "o7707-3.1-01",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "medium",
    "question": "Which error would cause the totals of a trial balance to disagree?",
    "options": [
      "An invoice for $310 omitted from the books completely",
      "Wages of $800 debited to the wages account and credited to the bank account as $80",
      "A sale of $450 to Rania posted to the account of Rana",
      "Rent of $950 entered as $590 in both the rent and bank accounts"
    ],
    "answer": 1,
    "explanation": "Unequal debit and credit amounts make the trial balance disagree. The other errors keep debits equal to credits (commission, omission and original entry).",
    "optionFeedback": [
      "If nothing is recorded, debits and credits are both missing, so the trial balance still agrees.",
      "Correct. Unequal debit and credit amounts make the trial balance disagree. The other errors keep debits equal to credits (commission, omission and original entry).",
      "An error of commission uses the same amount on both sides, so the trial balance still agrees.",
      "An error of original entry uses the same wrong amount on both sides, so the trial balance still agrees."
    ]
  },
  {
    "id": "o7707-3.1-02",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "Which balance appears on the credit side of a trial balance?",
    "options": [
      "Discount received",
      "Drawings",
      "Carriage inwards",
      "Returns inwards"
    ],
    "answer": 0,
    "explanation": "Discount received is income, so it is a credit balance. The others are debit balances.",
    "optionFeedback": [
      "Correct. Discount received is income, so it is a credit balance. The others are debit balances.",
      "Drawings reduce capital and are a debit balance.",
      "Carriage inwards is an expense, a debit balance.",
      "Returns inwards reduce sales and are a debit balance."
    ]
  },
  {
    "id": "o7707-3.1-03",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "The totals of a trial balance agree. Which statement is correct?",
    "options": [
      "The books contain no errors",
      "All transactions have been recorded",
      "The books may still contain errors",
      "The profit for the year is correct"
    ],
    "answer": 2,
    "explanation": "Several types of error, such as omission, commission and principle, do not affect the agreement of the trial balance.",
    "optionFeedback": [
      "Some errors, such as omission and commission, do not stop the trial balance agreeing.",
      "A transaction left out completely would not be revealed by the trial balance.",
      "Correct. Several types of error, such as omission, commission and principle, do not affect the agreement of the trial balance.",
      "An error of principle can distort profit even when the totals agree."
    ]
  },
  {
    "id": "o7707-3.1-04",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "A payment of $360 to Waleed was debited to the account of Walid, another supplier. What type of error is this?",
    "options": [
      "Compensating",
      "Original entry",
      "Principle",
      "Commission"
    ],
    "answer": 3,
    "explanation": "An error of commission puts the amount in the wrong account of the same class, here the wrong supplier's account.",
    "optionFeedback": [
      "A compensating error is two separate errors that cancel out.",
      "An error of original entry uses the wrong amount. The amount here is correct.",
      "An error of principle uses the wrong class of account, for example an expense instead of an asset. Both accounts here are suppliers.",
      "Correct. An error of commission puts the amount in the wrong account of the same class, here the wrong supplier's account."
    ]
  },
  {
    "id": "o7707-3.1-05",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "A cheque for $528 received from a customer was entered in both the bank account and the customer's account as $582. What type of error is this?",
    "options": [
      "Compensating",
      "Complete reversal",
      "Commission",
      "Original entry"
    ],
    "answer": 3,
    "explanation": "The wrong amount was used for both entries, starting from the source. This is an error of original entry, and the trial balance still agrees.",
    "optionFeedback": [
      "A compensating error is two separate errors that cancel out.",
      "A complete reversal uses the right accounts on the wrong sides.",
      "An error of commission uses the right amount in the wrong account of the same class.",
      "Correct. The wrong amount was used for both entries, starting from the source. This is an error of original entry, and the trial balance still agrees."
    ]
  },
  {
    "id": "o7707-3.1-06",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "medium",
    "question": "Cash sales of $700 were debited to the sales account and credited to the cash account. What type of error is this?",
    "options": [
      "Omission",
      "Complete reversal",
      "Principle",
      "Commission"
    ],
    "answer": 1,
    "explanation": "The correct accounts were used but debit and credit were the wrong way round. This is a complete reversal of entries.",
    "optionFeedback": [
      "An error of omission leaves the transaction out completely.",
      "Correct. The correct accounts were used but debit and credit were the wrong way round. This is a complete reversal of entries.",
      "An error of principle uses the wrong class of account. Here the accounts are correct.",
      "An error of commission uses the wrong personal account."
    ]
  },
  {
    "id": "o7707-3.1-07",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "medium",
    "question": "Which error would not be revealed by a trial balance?",
    "options": [
      "Two separate errors of $100 that cancel each other out",
      "A ledger balance left out of the trial balance",
      "Both entries of a transaction made on the debit side",
      "A debit of $100 with no matching credit"
    ],
    "answer": 0,
    "explanation": "Compensating errors cancel out, so the totals still agree.",
    "optionFeedback": [
      "Correct. Compensating errors cancel out, so the totals still agree.",
      "One side of the trial balance would be short.",
      "The debit side would be too high and the credit side too low.",
      "Debits would exceed credits, so the totals would not agree."
    ]
  },
  {
    "id": "o7707-3.1-08",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "Which list contains only debit balances?",
    "options": [
      "Sales, capital, trade payables",
      "Purchases, drawings, trade receivables",
      "Rent expense, discount received, inventory",
      "Purchases, capital, bank loan"
    ],
    "answer": 1,
    "explanation": "Expenses, drawings and assets have debit balances.",
    "optionFeedback": [
      "All three are credit balances.",
      "Correct. Expenses, drawings and assets have debit balances.",
      "Discount received is a credit balance.",
      "Capital and a bank loan are credit balances."
    ]
  },
  {
    "id": "o7707-3.1-09",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "medium",
    "question": "The cost of repairing a delivery van was debited to the motor vehicles account. What type of error is this?",
    "options": [
      "Omission",
      "Original entry",
      "Commission",
      "Principle"
    ],
    "answer": 3,
    "explanation": "Treating revenue expenditure as a non-current asset is an error of principle.",
    "optionFeedback": [
      "The transaction was recorded, just in the wrong type of account.",
      "The amount was correct.",
      "An error of commission uses the wrong account of the same class. Here an expense was put in an asset account.",
      "Correct. Treating revenue expenditure as a non-current asset is an error of principle."
    ]
  },
  {
    "id": "o7707-3.1-10",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "A credit note received from a supplier was not entered in the books at all. What type of error is this?",
    "options": [
      "Principle",
      "Omission",
      "Compensating",
      "Complete reversal"
    ],
    "answer": 1,
    "explanation": "Leaving a transaction out completely is an error of omission.",
    "optionFeedback": [
      "An error of principle records the item in the wrong class of account.",
      "Correct. Leaving a transaction out completely is an error of omission.",
      "A compensating error is two errors that cancel out.",
      "A complete reversal uses the right accounts on the wrong sides."
    ]
  },
  {
    "id": "o7707-3.1-11",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "easy",
    "question": "What is the main purpose of a trial balance?",
    "options": [
      "To check the arithmetical accuracy of the double entry",
      "To record transactions as they happen",
      "To show the financial position of the business",
      "To calculate the profit for the year"
    ],
    "answer": 0,
    "explanation": "A trial balance lists all ledger balances to check that total debits equal total credits.",
    "optionFeedback": [
      "Correct. A trial balance lists all ledger balances to check that total debits equal total credits.",
      "Transactions are recorded in books of prime entry and ledgers.",
      "That is the statement of financial position.",
      "That is the statement of profit or loss."
    ]
  },
  {
    "id": "o7707-3.1-12",
    "level": "O Level 7707",
    "topic": "3.1",
    "topicTitle": "The trial balance",
    "difficulty": "medium",
    "question": "An inventory figure appears in a trader's trial balance. Which inventory is it?",
    "options": [
      "Inventory sold during the year",
      "Average inventory for the year",
      "Inventory at the start of the year",
      "Inventory at the end of the year"
    ],
    "answer": 2,
    "explanation": "The inventory account holds the opening figure until the year-end adjustment for closing inventory.",
    "optionFeedback": [
      "Goods sold are not recorded as inventory.",
      "Average inventory is used in ratios, not recorded in the ledger.",
      "Correct. The inventory account holds the opening figure until the year-end adjustment for closing inventory.",
      "Closing inventory is counted after the trial balance and added as an adjustment."
    ]
  },
  {
    "id": "o7707-3.2-01",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "easy",
    "question": "A trial balance shows debit totals of $48 200 and credit totals of $47 840. Which entry is made in the suspense account?",
    "options": [
      "Debit $48 200",
      "Credit $47 840",
      "Debit $360",
      "Credit $360"
    ],
    "answer": 3,
    "explanation": "The credit side is $360 short, so a credit of $360 is placed in the suspense account to make the totals agree.",
    "optionFeedback": [
      "This is a trial balance total, not the difference.",
      "This is a trial balance total, not the difference.",
      "The debit side is larger, so the suspense entry must go on the credit side.",
      "Correct. The credit side is $360 short, so a credit of $360 is placed in the suspense account to make the totals agree."
    ]
  },
  {
    "id": "o7707-3.2-02",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "hard",
    "question": "A suspense account has a credit balance of $240. Which single error would explain this?",
    "options": [
      "Wages of $120 were credited instead of debited to the wages account",
      "A cash sale of $240 was not recorded at all",
      "Credit sales of $240 were entered in the customer's account but not in the sales account",
      "Purchases of $240 were entered in the supplier's account but not in the purchases account"
    ],
    "answer": 2,
    "explanation": "A credit balance in suspense means debits exceeded credits. Missing a $240 credit to sales does exactly that. The purchases and wages errors leave debits short, and a complete omission does not affect the trial balance.",
    "optionFeedback": [
      "Crediting wages instead of debiting leaves debits $240 short, which gives a debit balance in suspense.",
      "If a transaction is left out completely, both sides are missing and no suspense entry is needed.",
      "Correct. A credit balance in suspense means debits exceeded credits. Missing a $240 credit to sales does exactly that. The purchases and wages errors leave debits short, and a complete omission does not affect the trial balance.",
      "Missing a debit to purchases leaves debits short, which gives a debit balance in suspense."
    ]
  },
  {
    "id": "o7707-3.2-03",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "hard",
    "question": "A trader's draft profit for the year was $18 600. These errors were then found (ignore depreciation). What should the profit for the year be once these errors are corrected?",
    "options": [
      "$17 000",
      "$19 400",
      "$20 200",
      "$20 800"
    ],
    "answer": 2,
    "explanation": "Removing the furniture from repairs adds $1500. Correcting closing inventory adds $400. Recording the accrued electricity deducts $300. 18 600 + 1500 + 400 minus 300 = $20 200.",
    "optionFeedback": [
      "This makes every adjustment in the wrong direction.",
      "This deducts the inventory error instead of adding it. Understated closing inventory means profit is too low.",
      "Correct. Removing the furniture from repairs adds $1500. Correcting closing inventory adds $400. Recording the accrued electricity deducts $300. 18 600 + 1500 + 400 minus 300 = $20 200.",
      "This adds the electricity owing instead of deducting it. An extra expense reduces profit."
    ],
    "table": {
      "headers": [
        "error"
      ],
      "rows": [
        [
          "1. Office furniture $1500 had been debited to the repairs account"
        ],
        [
          "2. Closing inventory had been understated by $400"
        ],
        [
          "3. Electricity owing $300 had not been recorded"
        ]
      ]
    }
  },
  {
    "id": "o7707-3.2-04",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "easy",
    "question": "Electricity of $210 paid by bank was debited to the rent account. Which journal entry corrects this?",
    "options": [
      "Debit electricity $210, credit bank $210",
      "Debit rent $210, credit electricity $210",
      "Debit electricity $210, credit rent $210",
      "Debit electricity $210, credit suspense $210"
    ],
    "answer": 2,
    "explanation": "The bank entry was correct. Only the debit is in the wrong account, so move it from rent to electricity.",
    "optionFeedback": [
      "The bank entry was already correct. This would record the payment twice.",
      "This is the wrong way round and would double the error.",
      "Correct. The bank entry was correct. Only the debit is in the wrong account, so move it from rent to electricity.",
      "The trial balance was not affected, because a debit was made, so no suspense entry is needed."
    ]
  },
  {
    "id": "o7707-3.2-05",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "medium",
    "question": "The owner bought a laptop for $700 for home use and paid from the business bank account. It was debited to the office equipment account. What is the effect on the statement of financial position?",
    "options": [
      "Non-current assets overstated and owner's equity overstated",
      "Non-current assets overstated and owner's equity understated",
      "Non-current assets not affected and owner's equity overstated",
      "Non-current assets understated and owner's equity understated"
    ],
    "answer": 0,
    "explanation": "The laptop is drawings, not a business asset. Non-current assets are $700 too high, and because drawings were not recorded, owner's equity is $700 too high.",
    "optionFeedback": [
      "Correct. The laptop is drawings, not a business asset. Non-current assets are $700 too high, and because drawings were not recorded, owner's equity is $700 too high.",
      "The drawings were not recorded, so owner's equity is too high, not too low.",
      "The laptop was added to office equipment, so non-current assets are too high.",
      "Both figures are too high, not too low."
    ]
  },
  {
    "id": "o7707-3.2-06",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "hard",
    "question": "Rent received of $250 was debited to the rent received account. The bank entry was correct. What entry in the suspense account does this error cause?",
    "options": [
      "No entry, because the trial balance agrees",
      "Credit $500",
      "Credit $250",
      "Debit $500"
    ],
    "answer": 1,
    "explanation": "Rent received should be credited $250. Debiting it instead makes debits $500 more than credits, so suspense is credited $500.",
    "optionFeedback": [
      "Both entries were debits, so the trial balance cannot agree.",
      "Correct. Rent received should be credited $250. Debiting it instead makes debits $500 more than credits, so suspense is credited $500.",
      "The error both left out a $250 credit and added a $250 debit, so the difference is $500.",
      "Two debits make the debit side larger, so the suspense entry goes on the credit side."
    ]
  },
  {
    "id": "o7707-3.2-07",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "medium",
    "question": "The sales account was undercast by $300, and the difference was placed in a suspense account. What is the correcting entry?",
    "options": [
      "Debit sales $300, credit trade receivables $300",
      "Debit suspense $300, credit trade receivables $300",
      "Debit suspense $300, credit sales $300",
      "Debit sales $300, credit suspense $300"
    ],
    "answer": 2,
    "explanation": "Sales needs an extra credit of $300, and the suspense balance is cleared with the matching debit.",
    "optionFeedback": [
      "This would reduce sales further and leave the suspense balance.",
      "Trade receivables were correct. Only the sales total was wrong.",
      "Correct. Sales needs an extra credit of $300, and the suspense balance is cleared with the matching debit.",
      "This is the wrong way round. Sales needs to increase, so it is credited."
    ]
  },
  {
    "id": "o7707-3.2-08",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "medium",
    "question": "The owner's private home insurance of $600 was paid by the business and debited to the insurance expense account. What is the effect on the profit for the year?",
    "options": [
      "Understated by $600",
      "Understated by $1200",
      "No effect",
      "Overstated by $600"
    ],
    "answer": 0,
    "explanation": "The private insurance should be drawings, not a business expense, so profit is $600 too low.",
    "optionFeedback": [
      "Correct. The private insurance should be drawings, not a business expense, so profit is $600 too low.",
      "The error is $600, not double.",
      "Insurance expense includes a private item, so profit is affected.",
      "Expenses are too high, so profit is too low."
    ]
  },
  {
    "id": "o7707-3.2-09",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "easy",
    "question": "A payment of $430 to the supplier Usman was debited to the account of the supplier Uthman. What is the correcting entry?",
    "options": [
      "Debit Usman $430, credit bank $430",
      "Debit Uthman $430, credit Usman $430",
      "Debit Usman $430, credit suspense $430",
      "Debit Usman $430, credit Uthman $430"
    ],
    "answer": 3,
    "explanation": "Move the debit from Uthman's account to Usman's account.",
    "optionFeedback": [
      "The bank entry was correct. This would record the payment twice.",
      "This is the wrong way round and would double the error.",
      "An error of commission does not affect the trial balance, so no suspense entry is needed.",
      "Correct. Move the debit from Uthman's account to Usman's account."
    ]
  },
  {
    "id": "o7707-3.2-10",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "hard",
    "question": "A trader's draft profit for the year was $32 000. These errors were then found. What is the corrected profit for the year?",
    "options": [
      "$30 000",
      "$31 000",
      "$31 600",
      "$34 000"
    ],
    "answer": 2,
    "explanation": "32 000 + 500 (lower purchases) minus 1200 (depreciation) + 300 (lower insurance expense) = $31 600.",
    "optionFeedback": [
      "This deducts all three items. The returns and the prepayment increase profit.",
      "This deducts the prepayment. Removing it from this year's expense increases profit.",
      "Correct. 32 000 + 500 (lower purchases) minus 1200 (depreciation) + 300 (lower insurance expense) = $31 600.",
      "This adds all three items. Depreciation is an extra expense that reduces profit."
    ],
    "table": {
      "headers": [
        "error"
      ],
      "rows": [
        [
          "1. Purchases returns of $500 had not been recorded"
        ],
        [
          "2. Depreciation of $1200 had not been charged"
        ],
        [
          "3. Insurance of $300 paid in advance had been treated as an expense of this year"
        ]
      ]
    }
  },
  {
    "id": "o7707-3.2-11",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "medium",
    "question": "Which error would need an entry in the suspense account to correct it?",
    "options": [
      "A payment was posted to the wrong supplier's account",
      "The purchases journal was undercast by $100",
      "A sales invoice was not recorded at all",
      "Office equipment was debited to the purchases account"
    ],
    "answer": 1,
    "explanation": "An undercast journal total gives one side of the trial balance too little, so the correction involves suspense.",
    "optionFeedback": [
      "An error of commission does not affect the trial balance.",
      "Correct. An undercast journal total gives one side of the trial balance too little, so the correction involves suspense.",
      "An error of omission does not affect the trial balance.",
      "An error of principle does not affect the trial balance."
    ]
  },
  {
    "id": "o7707-3.2-12",
    "level": "O Level 7707",
    "topic": "3.2",
    "topicTitle": "Correction of errors",
    "difficulty": "hard",
    "question": "Money received from a customer, $250, was credited to the sales account instead of the customer's account. What is the effect on the statement of financial position?",
    "options": [
      "Trade receivables understated by $250 and owner's equity overstated by $250",
      "Trade receivables not affected and owner's equity overstated by $250",
      "Trade receivables overstated by $250 and owner's equity overstated by $250",
      "Trade receivables overstated by $250 and owner's equity not affected"
    ],
    "answer": 2,
    "explanation": "Sales and profit are $250 too high, so owner's equity is too high. The customer still appears to owe $250.",
    "optionFeedback": [
      "The customer's account was not reduced, so receivables are too high.",
      "The customer's account still shows the debt, so receivables are too high.",
      "Correct. Sales and profit are $250 too high, so owner's equity is too high. The customer still appears to owe $250.",
      "Sales are too high, so profit and owner's equity are too high."
    ]
  },
  {
    "id": "o7707-3.3-01",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "medium",
    "question": "The bank column of a cash book shows a debit balance of $3400. These items appear on the bank statement but not in the cash book. What is the updated cash book balance?",
    "options": [
      "$3005 debit",
      "$3175 debit",
      "$3795 debit",
      "$4245 debit"
    ],
    "answer": 2,
    "explanation": "3400 minus 45 minus 180 plus 620 = $3795. The balance is still money in the bank, so it is a debit in the cash book.",
    "optionFeedback": [
      "This reverses every item: it adds the payments and deducts the receipt.",
      "This forgets the credit transfer from the customer.",
      "Correct. 3400 minus 45 minus 180 plus 620 = $3795. The balance is still money in the bank, so it is a debit in the cash book.",
      "This adds the bank charges and direct debit instead of deducting them."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "bank charges",
          "45"
        ],
        [
          "direct debit for insurance",
          "180"
        ],
        [
          "credit transfer from a customer",
          "620"
        ]
      ]
    }
  },
  {
    "id": "o7707-3.3-02",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "hard",
    "question": "The bank column of a cash book shows an overdraft of $900. A direct debit of $150 and a customer's dishonoured cheque of $260 have not yet been entered. What is the updated cash book balance?",
    "options": [
      "$490 credit",
      "$490 debit",
      "$1310 credit",
      "$1310 debit"
    ],
    "answer": 2,
    "explanation": "Both items reduce the bank balance, so the overdraft grows: 900 + 150 + 260 = $1310. An overdraft is a credit balance in the cash book.",
    "optionFeedback": [
      "This deducts the items from the overdraft. Payments make an overdraft bigger.",
      "This deducts the items from the overdraft and shows the wrong side.",
      "Correct. Both items reduce the bank balance, so the overdraft grows: 900 + 150 + 260 = $1310. An overdraft is a credit balance in the cash book.",
      "The amount is right, but an overdraft is a credit balance in the cash book."
    ]
  },
  {
    "id": "o7707-3.3-03",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "hard",
    "question": "After updating, the bank column of a cash book shows a debit balance of $5200. Cheques of $1150 have been issued but not presented, and $700 paid in has not yet been credited by the bank. What balance does the bank statement show?",
    "options": [
      "$4750 credit",
      "$5650 credit",
      "$5650 debit",
      "$7050 credit"
    ],
    "answer": 1,
    "explanation": "Bank statement = 5200 + 1150 (unpresented cheques not yet taken out) minus 700 (deposit not yet added) = $5650. Money in the account is a credit balance on a bank statement.",
    "optionFeedback": [
      "This reverses the two adjustments.",
      "Correct. Bank statement = 5200 + 1150 (unpresented cheques not yet taken out) minus 700 (deposit not yet added) = $5650. Money in the account is a credit balance on a bank statement.",
      "The amount is right, but money in the account is a credit balance on a bank statement.",
      "This adds the deposit not yet credited instead of deducting it."
    ]
  },
  {
    "id": "o7707-3.3-04",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "medium",
    "question": "Which item explains why a bank statement balance is higher than the cash book balance?",
    "options": [
      "Cheques issued by the business that have not yet been presented",
      "Bank charges not yet entered in the cash book",
      "Money paid in that the bank has not yet credited",
      "A direct debit not yet entered in the cash book"
    ],
    "answer": 0,
    "explanation": "Unpresented cheques have been deducted in the cash book but not yet by the bank, so the bank balance is higher. The other items make the bank balance lower.",
    "optionFeedback": [
      "Correct. Unpresented cheques have been deducted in the cash book but not yet by the bank, so the bank balance is higher. The other items make the bank balance lower.",
      "Bank charges have already reduced the bank balance, making it lower than the cash book.",
      "Money not yet credited makes the bank balance lower than the cash book.",
      "A direct debit has already reduced the bank balance, making it lower than the cash book."
    ]
  },
  {
    "id": "o7707-3.3-05",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "medium",
    "question": "Why does a positive bank balance appear as a credit on a bank statement?",
    "options": [
      "The bank has made a loan to the customer",
      "The customer owes interest to the bank",
      "The bank owes that money to the customer",
      "Credit means the account has been closed"
    ],
    "answer": 2,
    "explanation": "The statement is prepared from the bank's point of view. Money deposited is a liability of the bank to the customer, so it is a credit.",
    "optionFeedback": [
      "A loan or overdraft would be a debit balance on the bank statement.",
      "Interest owed to the bank would reduce the balance, shown as a debit.",
      "Correct. The statement is prepared from the bank's point of view. Money deposited is a liability of the bank to the customer, so it is a credit.",
      "Credit does not mean the account is closed."
    ]
  },
  {
    "id": "o7707-3.3-06",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "medium",
    "question": "The bank column of a cash book shows a debit balance of $2100. The bank statement shows a dividend of $150 received by credit transfer and a standing order of $220, neither of which is in the cash book. What is the updated cash book balance?",
    "options": [
      "$1730 debit",
      "$2030 debit",
      "$2170 debit",
      "$2470 debit"
    ],
    "answer": 1,
    "explanation": "2100 + 150 minus 220 = $2030.",
    "optionFeedback": [
      "This deducts both items. The dividend increases the balance.",
      "Correct. 2100 + 150 minus 220 = $2030.",
      "This reverses both items.",
      "This adds both items. The standing order reduces the balance."
    ]
  },
  {
    "id": "o7707-3.3-07",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "hard",
    "question": "After updating, the cash book shows a bank overdraft of $1400. Cheques of $600 have not yet been presented and $900 paid in has not yet been credited by the bank. What does the bank statement show?",
    "options": [
      "$2900 overdrawn",
      "$1700 in credit",
      "$1700 overdrawn",
      "$1100 overdrawn"
    ],
    "answer": 2,
    "explanation": "Start at minus 1400. Unpresented cheques have not yet been taken by the bank: plus 600 gives minus 800. The deposit has not yet been added: minus 900 gives minus 1700.",
    "optionFeedback": [
      "This deducts the unpresented cheques. They have not yet left the bank, so the bank's overdraft is smaller by that amount.",
      "The amount is right, but the account is overdrawn.",
      "Correct. Start at minus 1400. Unpresented cheques have not yet been taken by the bank: plus 600 gives minus 800. The deposit has not yet been added: minus 900 gives minus 1700.",
      "This reverses the two adjustments."
    ]
  },
  {
    "id": "o7707-3.3-08",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "easy",
    "question": "What is the main purpose of a bank reconciliation statement?",
    "options": [
      "To stop the bank making charges",
      "To explain the difference between the cash book and the bank statement",
      "To replace the cash book",
      "To calculate the profit for the year"
    ],
    "answer": 1,
    "explanation": "It explains timing differences and helps to find errors in either record.",
    "optionFeedback": [
      "A reconciliation does not affect bank charges.",
      "Correct. It explains timing differences and helps to find errors in either record.",
      "The cash book is still needed.",
      "Profit is calculated in the statement of profit or loss."
    ]
  },
  {
    "id": "o7707-3.3-09",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "hard",
    "question": "The bank wrongly charged a $90 cheque written by another customer to the business's account. How is this dealt with?",
    "options": [
      "It is ignored until next year",
      "It is debited in the cash book",
      "It is credited in the cash book",
      "It is shown in the bank reconciliation statement and the cash book is not changed"
    ],
    "answer": 3,
    "explanation": "A bank error is not a transaction of the business. It is explained in the reconciliation and reported to the bank.",
    "optionFeedback": [
      "The bank should be told and the item shown in the reconciliation now.",
      "The cash book should not record money the business did not receive.",
      "The business did not make this payment, so its cash book is correct.",
      "Correct. A bank error is not a transaction of the business. It is explained in the reconciliation and reported to the bank."
    ]
  },
  {
    "id": "o7707-3.3-10",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "easy",
    "question": "What is a dishonoured cheque?",
    "options": [
      "A cheque received from a customer that the customer's bank refused to pay",
      "A cheque paid into the bank twice",
      "A cheque written by the business that has not yet been presented",
      "A cheque that has been lost in the post"
    ],
    "answer": 0,
    "explanation": "When a cheque is dishonoured, the amount is taken back out of the business's bank account and the customer owes it again.",
    "optionFeedback": [
      "Correct. When a cheque is dishonoured, the amount is taken back out of the business's bank account and the customer owes it again.",
      "That would be an error, not a dishonoured cheque.",
      "That is an unpresented cheque.",
      "A lost cheque is not dishonoured."
    ]
  },
  {
    "id": "o7707-3.3-11",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "medium",
    "question": "Which item on a bank statement means the cash book must be updated?",
    "options": [
      "A cheque written by the business that has not been presented",
      "Interest charged on the bank overdraft",
      "Money paid in that the bank has not yet credited",
      "An error made by the bank"
    ],
    "answer": 1,
    "explanation": "Items the business learns about only from the bank statement, such as interest and charges, are entered in the cash book.",
    "optionFeedback": [
      "This is already in the cash book. It is a timing difference.",
      "Correct. Items the business learns about only from the bank statement, such as interest and charges, are entered in the cash book.",
      "This is already in the cash book. It is a timing difference.",
      "The business's records are correct, so the cash book is not changed."
    ]
  },
  {
    "id": "o7707-3.3-12",
    "level": "O Level 7707",
    "topic": "3.3",
    "topicTitle": "Bank reconciliation",
    "difficulty": "hard",
    "question": "A bank statement shows a credit balance of $4600. Cheques of $1300 have not been presented and $800 paid in has not been credited. What is the balance in the bank column of the cash book?",
    "options": [
      "$2500 debit",
      "$4100 debit",
      "$5100 debit",
      "$6700 debit"
    ],
    "answer": 1,
    "explanation": "Cash book = 4600 minus 1300 (already deducted in the cash book) + 800 (already added in the cash book) = $4100.",
    "optionFeedback": [
      "This deducts the deposit not yet credited. It is already in the cash book, so it is added.",
      "Correct. Cash book = 4600 minus 1300 (already deducted in the cash book) + 800 (already added in the cash book) = $4100.",
      "This adds the unpresented cheques. They are already deducted in the cash book.",
      "This adds both items."
    ]
  },
  {
    "id": "o7707-3.4-01",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "hard",
    "question": "A business provided this information for the year. What is the closing balance on the sales ledger control account?",
    "options": [
      "$9500 debit",
      "$9800 debit",
      "$10 400 debit",
      "$11 300 debit"
    ],
    "answer": 0,
    "explanation": "8400 + 27 100 minus 24 300 minus 500 minus 900 minus 300 = $9500 owed by customers.",
    "optionFeedback": [
      "Correct. 8400 + 27 100 minus 24 300 minus 500 minus 900 minus 300 = $9500 owed by customers.",
      "This forgets to deduct the irrecoverable debts written off.",
      "This forgets to deduct returns inwards.",
      "This adds returns inwards instead of deducting them."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "opening balance (debit)",
          "8 400"
        ],
        [
          "credit sales",
          "27 100"
        ],
        [
          "receipts from credit customers",
          "24 300"
        ],
        [
          "discounts allowed",
          "500"
        ],
        [
          "returns inwards",
          "900"
        ],
        [
          "irrecoverable debts written off",
          "300"
        ]
      ]
    }
  },
  {
    "id": "o7707-3.4-02",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "medium",
    "question": "Which item is entered on the debit side of a purchases ledger control account?",
    "options": [
      "Credit purchases",
      "Returns inwards",
      "Discounts received",
      "Cash purchases"
    ],
    "answer": 2,
    "explanation": "Payments, returns outwards, discounts received and contra entries reduce the amount owed to suppliers and are debited. Credit purchases are credited. Cash purchases and returns inwards do not belong here.",
    "optionFeedback": [
      "Credit purchases increase the amount owed to suppliers, so they go on the credit side.",
      "Returns inwards relate to customers, so they belong in the sales ledger control account.",
      "Correct. Payments, returns outwards, discounts received and contra entries reduce the amount owed to suppliers and are debited. Credit purchases are credited. Cash purchases and returns inwards do not belong here.",
      "Cash purchases create no amount owed to a supplier."
    ]
  },
  {
    "id": "o7707-3.4-03",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "easy",
    "question": "Where is the total of credit sales for a sales ledger control account taken from?",
    "options": [
      "Sales journal",
      "Purchases journal",
      "Sales ledger",
      "Cash book"
    ],
    "answer": 0,
    "explanation": "Control accounts use totals from the books of prime entry. Credit sales come from the sales journal.",
    "optionFeedback": [
      "Correct. Control accounts use totals from the books of prime entry. Credit sales come from the sales journal.",
      "The purchases journal gives credit purchases, not credit sales.",
      "The sales ledger holds individual customer accounts. The control account checks against them; its totals come from books of prime entry.",
      "The cash book gives receipts from customers, not credit sales."
    ]
  },
  {
    "id": "o7707-3.4-04",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "hard",
    "question": "Bilal Electricals owes a business $750 in its sales ledger. The business also owes Bilal Electricals $480 in its purchases ledger. A contra entry is agreed. Which entry is made in the business's sales ledger control account?",
    "options": [
      "Credit $480",
      "Debit $480",
      "Credit $270",
      "Credit $750"
    ],
    "answer": 0,
    "explanation": "The contra cancels the smaller amount, $480, from both sides. It reduces trade receivables, so the sales ledger control account is credited.",
    "optionFeedback": [
      "Correct. The contra cancels the smaller amount, $480, from both sides. It reduces trade receivables, so the sales ledger control account is credited.",
      "The contra reduces trade receivables, so the entry is a credit.",
      "This is the difference. The contra cancels the smaller amount, $480, from both accounts.",
      "Only the amount owed in both directions, $480, can be set off."
    ]
  },
  {
    "id": "o7707-3.4-05",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "medium",
    "question": "What is an advantage of keeping control accounts?",
    "options": [
      "They show the total cash sales for the period",
      "They prevent all errors in the ledgers",
      "They help to locate an error to a particular ledger",
      "They replace the need for individual customer accounts"
    ],
    "answer": 2,
    "explanation": "If a control account total does not agree with the ledger, the search for the error can focus on that ledger.",
    "optionFeedback": [
      "Cash sales do not go through the sales ledger control account.",
      "Some errors, such as compensating errors, are not found by control accounts.",
      "Correct. If a control account total does not agree with the ledger, the search for the error can focus on that ledger.",
      "Individual customer accounts are still needed to know who owes what."
    ]
  },
  {
    "id": "o7707-3.4-06",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "hard",
    "question": "A business provided this information for the year. What is the closing balance on the purchases ledger control account?",
    "options": [
      "$7100 credit",
      "$7700 credit",
      "$8200 credit",
      "$10 500 credit"
    ],
    "answer": 0,
    "explanation": "6200 + 31 000 minus 28 400 minus 600 minus 1100 = $7100 owed to suppliers.",
    "optionFeedback": [
      "Correct. 6200 + 31 000 minus 28 400 minus 600 minus 1100 = $7100 owed to suppliers.",
      "This forgets the discounts received.",
      "This forgets the returns outwards.",
      "This adds returns and discounts instead of deducting them."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "opening balance (credit)",
          "6 200"
        ],
        [
          "credit purchases",
          "31 000"
        ],
        [
          "payments to suppliers",
          "28 400"
        ],
        [
          "discounts received",
          "600"
        ],
        [
          "returns outwards",
          "1 100"
        ]
      ]
    }
  },
  {
    "id": "o7707-3.4-07",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "medium",
    "question": "A sales ledger control account has a small credit balance as well as its main debit balance. What does the credit balance represent?",
    "options": [
      "A bank overdraft",
      "The total owed by all credit customers",
      "Customers who have overpaid or have credit notes larger than what they owe",
      "Amounts the business owes to its suppliers"
    ],
    "answer": 2,
    "explanation": "A credit balance on a customer's account means the business owes that customer money.",
    "optionFeedback": [
      "An overdraft is in the cash book.",
      "That is the debit balance.",
      "Correct. A credit balance on a customer's account means the business owes that customer money.",
      "Suppliers are in the purchases ledger control account."
    ]
  },
  {
    "id": "o7707-3.4-08",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "easy",
    "question": "Which item does not appear in a sales ledger control account?",
    "options": [
      "Returns inwards",
      "Discounts allowed",
      "Dishonoured cheques",
      "Cash sales"
    ],
    "answer": 3,
    "explanation": "Cash sales do not create amounts owed by customers.",
    "optionFeedback": [
      "Returns from customers are credited.",
      "Discounts allowed reduce what customers owe, so they are credited.",
      "A dishonoured cheque means the customer owes the money again, so it is debited.",
      "Correct. Cash sales do not create amounts owed by customers."
    ]
  },
  {
    "id": "o7707-3.4-09",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "medium",
    "question": "A customer's cheque for $350 is dishonoured. How is this recorded in the sales ledger control account?",
    "options": [
      "Debit $350",
      "Credit $350",
      "No entry",
      "Credit $350 as a discount allowed"
    ],
    "answer": 0,
    "explanation": "The original receipt is reversed, so trade receivables increase.",
    "optionFeedback": [
      "Correct. The original receipt is reversed, so trade receivables increase.",
      "The customer owes the money again, so the amount owed increases.",
      "The total owed by customers changes, so the control account must be updated.",
      "No discount is involved."
    ]
  },
  {
    "id": "o7707-3.4-10",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "medium",
    "question": "A business charges interest of $40 to a customer who pays late. Where is this recorded?",
    "options": [
      "On the debit side of the sales ledger control account",
      "It is not recorded in any control account",
      "In the purchases ledger control account",
      "On the credit side of the sales ledger control account"
    ],
    "answer": 0,
    "explanation": "Interest charged increases trade receivables.",
    "optionFeedback": [
      "Correct. Interest charged increases trade receivables.",
      "It changes the amount owed by customers, so it must be included.",
      "The customer is in the sales ledger, not the purchases ledger.",
      "The interest increases what the customer owes."
    ]
  },
  {
    "id": "o7707-3.4-11",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "easy",
    "question": "Where does the figure for payments to suppliers in a purchases ledger control account come from?",
    "options": [
      "Cash book",
      "Purchases journal",
      "Purchases ledger",
      "Sales journal"
    ],
    "answer": 0,
    "explanation": "Payments to suppliers are recorded in the cash book, and the total is posted to the control account.",
    "optionFeedback": [
      "Correct. Payments to suppliers are recorded in the cash book, and the total is posted to the control account.",
      "The purchases journal gives credit purchases.",
      "The purchases ledger holds individual accounts. The control account checks against them.",
      "The sales journal gives credit sales."
    ]
  },
  {
    "id": "o7707-3.4-12",
    "level": "O Level 7707",
    "topic": "3.4",
    "topicTitle": "Control accounts",
    "difficulty": "easy",
    "question": "In a digital accounting system, when is the sales ledger control account updated?",
    "options": [
      "Only once a year when the accounts are prepared",
      "Only when the owner asks for it",
      "Automatically, each time a credit sales transaction is posted",
      "Never, because digital systems do not use control accounts"
    ],
    "answer": 2,
    "explanation": "Software posts each transaction to the individual account and the control account at the same time.",
    "optionFeedback": [
      "Digital systems update totals as transactions are posted.",
      "The update is automatic.",
      "Correct. Software posts each transaction to the individual account and the control account at the same time.",
      "Digital systems still keep control totals for each ledger."
    ]
  },
  {
    "id": "o7707-4.1-01",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which is capital expenditure?",
    "options": [
      "Insurance on a delivery van",
      "The cost of repairing an old machine",
      "The cost of installing a new machine",
      "Fuel for a delivery van"
    ],
    "answer": 2,
    "explanation": "Costs of buying an asset and getting it ready for use are capital expenditure. Running and repair costs are revenue expenditure.",
    "optionFeedback": [
      "Insurance is a running cost, revenue expenditure.",
      "Repairs keep an existing asset working, so they are revenue expenditure.",
      "Correct. Costs of buying an asset and getting it ready for use are capital expenditure. Running and repair costs are revenue expenditure.",
      "Fuel is a running cost, revenue expenditure."
    ]
  },
  {
    "id": "o7707-4.1-02",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "medium",
    "question": "A business received the following amounts during the year. What is the total of its capital receipts?",
    "options": [
      "$14 500",
      "$20 500",
      "$21 700",
      "$50 500"
    ],
    "answer": 1,
    "explanation": "Capital receipts are not from normal trading: van sale, loan and capital = 4500 + 10 000 + 6000 = $20 500. Commission and sales are revenue receipts.",
    "optionFeedback": [
      "This leaves out the additional capital from the owner.",
      "Correct. Capital receipts are not from normal trading: van sale, loan and capital = 4500 + 10 000 + 6000 = $20 500. Commission and sales are revenue receipts.",
      "This includes commission received, which is a revenue receipt.",
      "This includes sales of goods, which are revenue receipts."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "sale of an old delivery van",
          "4 500"
        ],
        [
          "loan received from the bank",
          "10 000"
        ],
        [
          "commission received",
          "1 200"
        ],
        [
          "sales of goods",
          "30 000"
        ],
        [
          "additional capital from the owner",
          "6 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-4.1-03",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "hard",
    "question": "A delivery van costing $15 000 was debited to the motor expenses account. Vans are depreciated at 20% per year on cost, with a full year's charge in the year of purchase. What was the effect on the profit for the year?",
    "options": [
      "Understated by $12 000",
      "Overstated by $12 000",
      "Understated by $18 000",
      "Understated by $15 000"
    ],
    "answer": 0,
    "explanation": "Expenses were $15 000 too high, but $3000 depreciation (20% of 15 000) was not charged. Net effect: profit too low by 15 000 minus 3000 = $12 000.",
    "optionFeedback": [
      "Correct. Expenses were $15 000 too high, but $3000 depreciation (20% of 15 000) was not charged. Net effect: profit too low by 15 000 minus 3000 = $12 000.",
      "Expenses were too high, so profit was too low, not too high.",
      "This adds the depreciation instead of deducting it.",
      "This forgets the $3000 depreciation that should have been charged."
    ]
  },
  {
    "id": "o7707-4.1-04",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which cost should be added to the cost of premises?",
    "options": [
      "Repainting the premises five years after purchase",
      "Cleaning of the premises",
      "Insurance of the premises",
      "Legal fees paid when buying the premises"
    ],
    "answer": 3,
    "explanation": "Costs of acquiring the asset, such as legal fees, are capital expenditure and part of its cost.",
    "optionFeedback": [
      "Repainting years later is maintenance, revenue expenditure.",
      "Cleaning is a running cost, revenue expenditure.",
      "Insurance is a running cost, revenue expenditure.",
      "Correct. Costs of acquiring the asset, such as legal fees, are capital expenditure and part of its cost."
    ]
  },
  {
    "id": "o7707-4.1-05",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which is revenue expenditure?",
    "options": [
      "Delivery charge on a new machine",
      "Buying a computer for the office",
      "Repainting the office",
      "Building an extension to the warehouse"
    ],
    "answer": 2,
    "explanation": "Repainting maintains an existing asset, so it is revenue expenditure. The others add to or create non-current assets.",
    "optionFeedback": [
      "Delivery charges on a new machine are part of its cost, capital expenditure.",
      "Buying a computer is capital expenditure.",
      "Correct. Repainting maintains an existing asset, so it is revenue expenditure. The others add to or create non-current assets.",
      "Building an extension is capital expenditure."
    ]
  },
  {
    "id": "o7707-4.1-06",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which is a capital receipt?",
    "options": [
      "Money received from selling an old machine",
      "Commission received",
      "Rent received from a tenant",
      "Money received from sales of goods"
    ],
    "answer": 0,
    "explanation": "Capital receipts come from sources other than normal trading, such as selling a non-current asset.",
    "optionFeedback": [
      "Correct. Capital receipts come from sources other than normal trading, such as selling a non-current asset.",
      "Commission is income, a revenue receipt.",
      "Rent received is income from normal activities, a revenue receipt.",
      "Sales are revenue receipts."
    ]
  },
  {
    "id": "o7707-4.1-07",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which is a revenue receipt?",
    "options": [
      "Additional capital paid in by the owner",
      "A loan received from the bank",
      "Discount received from a supplier",
      "Money from selling an old delivery van"
    ],
    "answer": 2,
    "explanation": "Revenue receipts arise from normal business activities and are shown as income.",
    "optionFeedback": [
      "Capital introduced is a capital receipt.",
      "A loan is a capital receipt.",
      "Correct. Revenue receipts arise from normal business activities and are shown as income.",
      "Selling a non-current asset gives a capital receipt."
    ]
  },
  {
    "id": "o7707-4.1-08",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "medium",
    "question": "A new shop counter costing $2500 was debited to the repairs account. Ignoring depreciation, what is the effect?",
    "options": [
      "Non-current assets understated by $2500 and profit understated by $2500",
      "Non-current assets not affected and profit understated by $2500",
      "Non-current assets overstated by $2500 and profit understated by $2500",
      "Non-current assets understated by $2500 and profit overstated by $2500"
    ],
    "answer": 0,
    "explanation": "Capital expenditure was treated as an expense: expenses too high and assets too low.",
    "optionFeedback": [
      "Correct. Capital expenditure was treated as an expense: expenses too high and assets too low.",
      "The counter should be a non-current asset, so non-current assets are affected.",
      "The counter is missing from non-current assets, so they are too low.",
      "Repairs are too high, so profit is too low."
    ]
  },
  {
    "id": "o7707-4.1-09",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "medium",
    "question": "A business buys a machine. Price $18 000, delivery $600, installation $900 and the first year's insurance $400. At what cost is the machine recorded?",
    "options": [
      "$18 000",
      "$18 600",
      "$19 500",
      "$19 900"
    ],
    "answer": 2,
    "explanation": "Cost = 18 000 + 600 + 900 = $19 500. Insurance is revenue expenditure.",
    "optionFeedback": [
      "This is the price only. Delivery and installation are part of the cost.",
      "This forgets the installation cost.",
      "Correct. Cost = 18 000 + 600 + 900 = $19 500. Insurance is revenue expenditure.",
      "This includes insurance, which is a running cost."
    ]
  },
  {
    "id": "o7707-4.1-10",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Which cost relating to a delivery van is revenue expenditure?",
    "options": [
      "The delivery charge when the van was bought",
      "Fitting a tail lift when the van was bought",
      "The annual road licence",
      "The purchase price of the van"
    ],
    "answer": 2,
    "explanation": "A yearly licence is a running cost, so it is revenue expenditure.",
    "optionFeedback": [
      "Costs of getting the asset ready for use are capital.",
      "Improving the asset at purchase is capital expenditure.",
      "Correct. A yearly licence is a running cost, so it is revenue expenditure.",
      "Buying the van is capital expenditure."
    ]
  },
  {
    "id": "o7707-4.1-11",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "medium",
    "question": "A business receives a five-year bank loan of $20 000. How is it shown in the financial statements?",
    "options": [
      "As a non-current liability in the statement of financial position",
      "As an addition to the owner's capital",
      "As a current asset only",
      "As income in the statement of profit or loss"
    ],
    "answer": 0,
    "explanation": "The loan must be repaid after more than a year, so it is a non-current liability.",
    "optionFeedback": [
      "Correct. The loan must be repaid after more than a year, so it is a non-current liability.",
      "The loan is owed to the bank, not invested by the owner.",
      "The money received is an asset, but the loan itself is a liability.",
      "A loan is a capital receipt, not income."
    ]
  },
  {
    "id": "o7707-4.1-12",
    "level": "O Level 7707",
    "topic": "4.1",
    "topicTitle": "Capital and revenue expenditure and receipts",
    "difficulty": "easy",
    "question": "Why must a business distinguish between capital and revenue expenditure?",
    "options": [
      "So that the business pays less tax",
      "So that expenses are kept as low as possible",
      "So that profit and the values of assets are stated correctly",
      "So that the trial balance agrees"
    ],
    "answer": 2,
    "explanation": "Treating one as the other misstates both profit and non-current assets.",
    "optionFeedback": [
      "The aim is accuracy, not lower tax.",
      "Correct treatment does not reduce actual spending.",
      "Correct. Treating one as the other misstates both profit and non-current assets.",
      "A wrong classification does not stop the trial balance agreeing."
    ]
  },
  {
    "id": "o7707-4.2-01",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "easy",
    "question": "A machine costs $24 000. It is expected to last 5 years and then be sold for $4000. What is the annual depreciation using the straight-line method?",
    "options": [
      "$4000",
      "$4800",
      "$5600",
      "$20 000"
    ],
    "answer": 0,
    "explanation": "(24 000 minus 4000) divided by 5 years = $4000 per year.",
    "optionFeedback": [
      "Correct. (24 000 minus 4000) divided by 5 years = $4000 per year.",
      "This ignores the $4000 residual value.",
      "This adds the residual value instead of deducting it.",
      "This is the total depreciation over 5 years, not the annual charge."
    ]
  },
  {
    "id": "o7707-4.2-02",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "A van cost $32 000 and is depreciated at 25% per year using the reducing balance method. What is the depreciation charge in year 3?",
    "options": [
      "$4500",
      "$6000",
      "$8000",
      "$13 500"
    ],
    "answer": 0,
    "explanation": "Year 1: 25% of 32 000 = 8000, leaving 24 000. Year 2: 25% of 24 000 = 6000, leaving 18 000. Year 3: 25% of 18 000 = $4500.",
    "optionFeedback": [
      "Correct. Year 1: 25% of 32 000 = 8000, leaving 24 000. Year 2: 25% of 24 000 = 6000, leaving 18 000. Year 3: 25% of 18 000 = $4500.",
      "This is the year 2 charge.",
      "This is the year 1 charge.",
      "This is the net book value after 3 years, not the year 3 charge."
    ]
  },
  {
    "id": "o7707-4.2-03",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "Equipment that cost $12 000 had accumulated depreciation of $7500. It was sold for $3800. What was the result of the disposal?",
    "options": [
      "A loss of $700",
      "A loss of $8200",
      "A profit of $3800",
      "A profit of $700"
    ],
    "answer": 0,
    "explanation": "Net book value = 12 000 minus 7500 = $4500. Sold for $3800, so a loss of $700.",
    "optionFeedback": [
      "Correct. Net book value = 12 000 minus 7500 = $4500. Sold for $3800, so a loss of $700.",
      "This compares proceeds with original cost and ignores the depreciation already charged.",
      "The sale proceeds are not a profit.",
      "Proceeds are below net book value, so it is a loss, not a profit."
    ]
  },
  {
    "id": "o7707-4.2-04",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "When a non-current asset is sold, which journal entry transfers its original cost to the disposal account?",
    "options": [
      "Debit disposal account, credit provision for depreciation",
      "Debit disposal account, credit the asset account",
      "Debit provision for depreciation, credit disposal account",
      "Debit the asset account, credit disposal account"
    ],
    "answer": 1,
    "explanation": "The asset's cost is removed from the asset account (credit) and put into the disposal account (debit). Accumulated depreciation goes the other way.",
    "optionFeedback": [
      "This is the wrong direction for accumulated depreciation, and it does not transfer the cost.",
      "Correct. The asset's cost is removed from the asset account (credit) and put into the disposal account (debit). Accumulated depreciation goes the other way.",
      "This entry transfers the accumulated depreciation, not the cost.",
      "This is the wrong way round."
    ]
  },
  {
    "id": "o7707-4.2-05",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "A garage values its loose tools at the end of each year. Tools were valued at $1900 at the start of the year, $600 of new tools were bought, and the year-end valuation was $1750. What is the depreciation charge using the revaluation method?",
    "options": [
      "$150",
      "$600",
      "$750",
      "$2500"
    ],
    "answer": 2,
    "explanation": "Depreciation = opening value + purchases minus closing value = 1900 + 600 minus 1750 = $750.",
    "optionFeedback": [
      "This forgets the $600 of new tools bought.",
      "The purchases are not the depreciation charge.",
      "Correct. Depreciation = opening value + purchases minus closing value = 1900 + 600 minus 1750 = $750.",
      "This forgets to deduct the closing valuation."
    ]
  },
  {
    "id": "o7707-4.2-06",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "easy",
    "question": "Which statement about depreciation is correct?",
    "options": [
      "It is an expense that does not involve a payment of cash",
      "It applies to inventory as well as non-current assets",
      "It shows the market value of the asset",
      "It is money set aside to replace the asset"
    ],
    "answer": 0,
    "explanation": "Depreciation spreads the cost of a non-current asset over its useful life. No cash leaves the business when it is charged.",
    "optionFeedback": [
      "Correct. Depreciation spreads the cost of a non-current asset over its useful life. No cash leaves the business when it is charged.",
      "Inventory is not depreciated. It is valued at the lower of cost and net realisable value.",
      "Net book value is not the market value.",
      "No cash is set aside when depreciation is charged."
    ]
  },
  {
    "id": "o7707-4.2-07",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "A computer cost $3600 and is depreciated at 25% per year using the straight-line method. What is its net book value after two years?",
    "options": [
      "$900",
      "$1800",
      "$2025",
      "$2700"
    ],
    "answer": 1,
    "explanation": "Depreciation = 25% of 3600 = 900 a year. After two years: 3600 minus 1800 = $1800.",
    "optionFeedback": [
      "This is one year's depreciation.",
      "Correct. Depreciation = 25% of 3600 = 900 a year. After two years: 3600 minus 1800 = $1800.",
      "This uses the reducing balance method.",
      "This is the net book value after one year."
    ]
  },
  {
    "id": "o7707-4.2-08",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "A vehicle cost $22 000 and had accumulated depreciation of $15 000. It was sold for $8200. What was the result?",
    "options": [
      "A loss of $13 800",
      "A profit of $8200",
      "A loss of $1200",
      "A profit of $1200"
    ],
    "answer": 3,
    "explanation": "Net book value = 22 000 minus 15 000 = 7000. Sold for 8200, so a profit of $1200.",
    "optionFeedback": [
      "This compares proceeds with cost and ignores depreciation.",
      "The proceeds are not all profit.",
      "Proceeds were more than net book value, so it is a profit.",
      "Correct. Net book value = 22 000 minus 15 000 = 7000. Sold for 8200, so a profit of $1200."
    ]
  },
  {
    "id": "o7707-4.2-09",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "easy",
    "question": "How does the annual depreciation charge affect the statement of financial position?",
    "options": [
      "It reduces the net book value of non-current assets and reduces owner's equity",
      "It increases current assets",
      "It increases liabilities",
      "It reduces the cash balance"
    ],
    "answer": 0,
    "explanation": "Depreciation reduces profit (so owner's equity) and is deducted from the asset's cost.",
    "optionFeedback": [
      "Correct. Depreciation reduces profit (so owner's equity) and is deducted from the asset's cost.",
      "Depreciation reduces assets, it does not add any.",
      "Depreciation is not owed to anyone.",
      "No cash is paid when depreciation is charged."
    ]
  },
  {
    "id": "o7707-4.2-10",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "easy",
    "question": "What is a feature of the reducing balance method?",
    "options": [
      "It charges the same amount every year",
      "It reduces the asset to exactly zero at the end",
      "It charges more depreciation in the early years",
      "It charges more each year"
    ],
    "answer": 2,
    "explanation": "The same percentage is applied to a smaller net book value each year, so the charge falls.",
    "optionFeedback": [
      "That is the straight-line method.",
      "A percentage of a falling balance never quite reaches zero.",
      "Correct. The same percentage is applied to a smaller net book value each year, so the charge falls.",
      "The charge falls each year as the net book value falls."
    ]
  },
  {
    "id": "o7707-4.2-11",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "easy",
    "question": "Which non-current asset is usually not depreciated?",
    "options": [
      "Machinery",
      "Motor vehicles",
      "Land",
      "Buildings"
    ],
    "answer": 2,
    "explanation": "Land normally has an unlimited useful life, so it is not depreciated.",
    "optionFeedback": [
      "Machinery wears out and is depreciated.",
      "Vehicles wear out and are depreciated.",
      "Correct. Land normally has an unlimited useful life, so it is not depreciated.",
      "Buildings wear out and are depreciated."
    ]
  },
  {
    "id": "o7707-4.2-12",
    "level": "O Level 7707",
    "topic": "4.2",
    "topicTitle": "Depreciation and disposal of non-current assets",
    "difficulty": "medium",
    "question": "What is the journal entry for the annual depreciation charge?",
    "options": [
      "Debit provision for depreciation, credit statement of profit or loss",
      "Debit provision for depreciation, credit the asset account",
      "Debit the asset account, credit bank",
      "Debit statement of profit or loss, credit provision for depreciation"
    ],
    "answer": 3,
    "explanation": "The charge is an expense, and the provision for depreciation builds up as a credit balance.",
    "optionFeedback": [
      "This is the wrong way round.",
      "This entry is used on disposal, not for the yearly charge.",
      "That records buying an asset.",
      "Correct. The charge is an expense, and the provision for depreciation builds up as a credit balance."
    ]
  },
  {
    "id": "o7707-4.3-01",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "During the year a trader paid rent of $7800. At the start of the year $600 rent was prepaid. At the end of the year $900 rent was owing. What is the rent expense for the year?",
    "options": [
      "$6300",
      "$7500",
      "$8100",
      "$9300"
    ],
    "answer": 3,
    "explanation": "Expense = prepaid at start (used this year) + paid + owing at end = 600 + 7800 + 900 = $9300.",
    "optionFeedback": [
      "This deducts both the prepayment and the amount owing.",
      "This deducts the rent owing at the end. Rent owing is an extra expense for the year.",
      "This deducts the opening prepayment. That rent was paid last year but used this year, so it is added.",
      "Correct. Expense = prepaid at start (used this year) + paid + owing at end = 600 + 7800 + 900 = $9300."
    ]
  },
  {
    "id": "o7707-4.3-02",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "hard",
    "question": "A business received commission of $4200 during the year. At the start of the year $300 commission was owed to the business. At the end of the year $500 had been received in advance. What commission income is shown in the statement of profit or loss?",
    "options": [
      "$3400",
      "$4000",
      "$4400",
      "$5000"
    ],
    "answer": 0,
    "explanation": "The $300 was earned last year and the $500 belongs to next year, so both are removed: 4200 minus 300 minus 500 = $3400.",
    "optionFeedback": [
      "Correct. The $300 was earned last year and the $500 belongs to next year, so both are removed: 4200 minus 300 minus 500 = $3400.",
      "This adds the commission owed at the start. It was earned last year.",
      "This adds the commission received in advance. It belongs to next year.",
      "This adds both adjustments instead of deducting them."
    ]
  },
  {
    "id": "o7707-4.3-03",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "After the transfer to the statement of profit or loss, the insurance account has a debit balance carried down at the year end. What does this balance represent?",
    "options": [
      "Insurance owing",
      "Income received in advance",
      "Income owing to the business",
      "Insurance paid in advance"
    ],
    "answer": 3,
    "explanation": "A debit balance on an expense account after the transfer is an amount paid that relates to the next year, a prepaid expense (an asset).",
    "optionFeedback": [
      "Insurance owing would be a credit balance on the insurance account.",
      "Income received in advance arises on an income account, not an expense account.",
      "Income owing arises on an income account, not an expense account.",
      "Correct. A debit balance on an expense account after the transfer is an amount paid that relates to the next year, a prepaid expense (an asset)."
    ]
  },
  {
    "id": "o7707-4.3-04",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "easy",
    "question": "Where is income owing to the business at the year end shown in the statement of financial position?",
    "options": [
      "Non-current assets",
      "Current assets",
      "Owner's equity",
      "Current liabilities"
    ],
    "answer": 1,
    "explanation": "Income earned but not yet received is an amount due to the business, so it is a current asset (other receivables).",
    "optionFeedback": [
      "Non-current assets are long-term assets such as equipment.",
      "Correct. Income earned but not yet received is an amount due to the business, so it is a current asset (other receivables).",
      "Owner's equity is the owner's interest in the business.",
      "Current liabilities are amounts the business owes."
    ]
  },
  {
    "id": "o7707-4.3-05",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "A trader forgot to record electricity owing of $450 at the year end. What is the effect of this omission?",
    "options": [
      "Profit understated by $450 and current liabilities overstated by $450",
      "No effect on profit and current liabilities understated by $450",
      "Profit overstated by $450 and current liabilities understated by $450",
      "Profit overstated by $450 and current assets overstated by $450"
    ],
    "answer": 2,
    "explanation": "The expense is too low, so profit is too high. The amount owing should be shown as a current liability, so liabilities are too low.",
    "optionFeedback": [
      "This is the wrong way round. A missing expense makes profit too high.",
      "The missing expense does affect profit.",
      "Correct. The expense is too low, so profit is too high. The amount owing should be shown as a current liability, so liabilities are too low.",
      "An expense owing is a liability, not an asset."
    ]
  },
  {
    "id": "o7707-4.3-06",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "hard",
    "question": "A landlord received rent of $9000 during the year. At the start of the year $1000 had been received in advance. At the end of the year the tenant owed $750. What rent income is shown for the year?",
    "options": [
      "$7250",
      "$8750",
      "$9250",
      "$10 750"
    ],
    "answer": 3,
    "explanation": "9000 + 1000 (paid last year for this year) + 750 (owing for this year) = $10 750.",
    "optionFeedback": [
      "This deducts both adjustments.",
      "This deducts the rent received in advance at the start. It belongs to this year, so it is added.",
      "This deducts the rent owing at the end. It was earned this year, so it is added.",
      "Correct. 9000 + 1000 (paid last year for this year) + 750 (owing for this year) = $10 750."
    ]
  },
  {
    "id": "o7707-4.3-07",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "On 1 October a business paid insurance of $2400 for the next 12 months. Its year ends on 31 December. What is the insurance expense for the year?",
    "options": [
      "$200",
      "$600",
      "$1800",
      "$2400"
    ],
    "answer": 1,
    "explanation": "Three months (October to December) relate to this year: 3/12 of 2400 = $600.",
    "optionFeedback": [
      "This is only one month.",
      "Correct. Three months (October to December) relate to this year: 3/12 of 2400 = $600.",
      "This is the amount prepaid for next year.",
      "This is the whole payment. Nine months relate to next year."
    ]
  },
  {
    "id": "o7707-4.3-08",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "easy",
    "question": "Why are accruals and prepayments adjusted at the year end?",
    "options": [
      "So that profit is as high as possible",
      "So that income and expenses are matched with the period they relate to",
      "So that the trial balance agrees",
      "So that only cash paid is recorded"
    ],
    "answer": 1,
    "explanation": "The matching (accruals) principle requires income and expenses to be recorded in the period they belong to.",
    "optionFeedback": [
      "Adjustments can increase or decrease profit.",
      "Correct. The matching (accruals) principle requires income and expenses to be recorded in the period they belong to.",
      "The trial balance is checked before these adjustments.",
      "Adjustments move away from a cash basis."
    ]
  },
  {
    "id": "o7707-4.3-09",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "easy",
    "question": "How are wages owing at the year end shown in the statement of financial position?",
    "options": [
      "As part of owner's equity",
      "As a non-current asset",
      "As a current liability",
      "As a current asset"
    ],
    "answer": 2,
    "explanation": "Expenses owing are other payables, a current liability.",
    "optionFeedback": [
      "They are owed to employees, not the owner.",
      "They are not a long-term asset.",
      "Correct. Expenses owing are other payables, a current liability.",
      "Wages owing are owed by the business, not to it."
    ]
  },
  {
    "id": "o7707-4.3-10",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "At the year end the commission received account has a credit balance carried down. What does this represent?",
    "options": [
      "An expense owing",
      "An expense paid in advance",
      "Commission received in advance",
      "Commission owing to the business"
    ],
    "answer": 2,
    "explanation": "Cash received for next year is carried down as a credit balance, a current liability.",
    "optionFeedback": [
      "Commission received is an income account, not an expense.",
      "Commission received is an income account, not an expense.",
      "Correct. Cash received for next year is carried down as a credit balance, a current liability.",
      "That would be a debit balance."
    ]
  },
  {
    "id": "o7707-4.3-11",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "medium",
    "question": "A trader forgot to adjust for rent of $500 paid in advance at the year end. What is the effect?",
    "options": [
      "No effect on profit and current assets understated by $500",
      "Profit overstated by $500 and current assets understated by $500",
      "Profit understated by $500 and current assets understated by $500",
      "Profit understated by $500 and current liabilities overstated by $500"
    ],
    "answer": 2,
    "explanation": "The expense includes $500 belonging to next year, and the prepayment is missing from current assets.",
    "optionFeedback": [
      "The rent expense includes next year's rent, so profit is affected.",
      "The rent expense is too high, so profit is too low.",
      "Correct. The expense includes $500 belonging to next year, and the prepayment is missing from current assets.",
      "A prepayment is an asset, not a liability."
    ]
  },
  {
    "id": "o7707-4.3-12",
    "level": "O Level 7707",
    "topic": "4.3",
    "topicTitle": "Other payables and other receivables",
    "difficulty": "hard",
    "question": "A business paid telephone bills of $1350 during the year. $150 was owing at the start of the year and $210 was owing at the end. What is the telephone expense for the year?",
    "options": [
      "$1290",
      "$1350",
      "$1410",
      "$1710"
    ],
    "answer": 2,
    "explanation": "1350 minus 150 (last year's bill) + 210 (this year's bill not yet paid) = $1410.",
    "optionFeedback": [
      "This reverses the opening and closing accruals.",
      "This is the cash paid. It must be adjusted for the amounts owing.",
      "Correct. 1350 minus 150 (last year's bill) + 210 (this year's bill not yet paid) = $1410.",
      "This adds the opening accrual. It was last year's expense, paid this year."
    ]
  },
  {
    "id": "o7707-4.4-01",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "hard",
    "question": "At the year end trade receivables were $36 000. A debt of $1000 is to be written off. An allowance for irrecoverable debts of 4% of the remaining receivables is required. What amount is shown for trade receivables in the statement of financial position?",
    "options": [
      "$33 560",
      "$33 600",
      "$34 560",
      "$35 000"
    ],
    "answer": 1,
    "explanation": "Write off first: 36 000 minus 1000 = 35 000. Allowance 4% of 35 000 = 1400. Net trade receivables = 35 000 minus 1400 = $33 600.",
    "optionFeedback": [
      "This calculates the allowance before writing off the $1000 debt.",
      "Correct. Write off first: 36 000 minus 1000 = 35 000. Allowance 4% of 35 000 = 1400. Net trade receivables = 35 000 minus 1400 = $33 600.",
      "This calculates the allowance on $36 000 and forgets to write off the debt.",
      "This forgets to deduct the allowance."
    ]
  },
  {
    "id": "o7707-4.4-02",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "The allowance for irrecoverable debts is increased from $900 to $1250. What is the effect?",
    "options": [
      "Profit decreases by $350 and net trade receivables are unchanged",
      "Profit increases by $350 and net trade receivables decrease by $350",
      "Profit decreases by $350 and net trade receivables decrease by $350",
      "Profit decreases by $1250 and net trade receivables decrease by $1250"
    ],
    "answer": 2,
    "explanation": "Only the increase, $350, is charged against profit. The higher allowance is deducted from trade receivables, so the net figure falls by $350.",
    "optionFeedback": [
      "The allowance is deducted from trade receivables, so the net figure falls.",
      "An increase in the allowance is an expense, so profit decreases.",
      "Correct. Only the increase, $350, is charged against profit. The higher allowance is deducted from trade receivables, so the net figure falls by $350.",
      "Only the increase, $350, is charged against profit."
    ]
  },
  {
    "id": "o7707-4.4-03",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "A debt of $400 written off last year is unexpectedly paid by bank transfer this year. Which double entry records the money received?",
    "options": [
      "Debit bank, credit irrecoverable debts recovered",
      "Debit bank, credit sales",
      "Debit irrecoverable debts recovered, credit bank",
      "Debit trade receivables, credit bank"
    ],
    "answer": 0,
    "explanation": "The bank increases. The recovery is treated as income for the year in an irrecoverable debts recovered account.",
    "optionFeedback": [
      "Correct. The bank increases. The recovery is treated as income for the year in an irrecoverable debts recovered account.",
      "The recovery is not a sale made this year.",
      "This is the wrong way round. Money is received, so bank is debited.",
      "This would record money paid out, not received."
    ]
  },
  {
    "id": "o7707-4.4-04",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "easy",
    "question": "Which accounting principle is applied when a business creates an allowance for irrecoverable debts?",
    "options": [
      "Prudence",
      "Business entity",
      "Money measurement",
      "Consistency"
    ],
    "answer": 0,
    "explanation": "Prudence means assets and profit should not be overstated. The allowance reflects that some receivables may not be collected.",
    "optionFeedback": [
      "Correct. Prudence means assets and profit should not be overstated. The allowance reflects that some receivables may not be collected.",
      "Business entity means keeping the owner's affairs separate.",
      "Money measurement means recording only items measurable in money.",
      "Consistency means using the same methods each year."
    ]
  },
  {
    "id": "o7707-4.4-05",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "A customer owing $900 becomes bankrupt and pays 25 cents for every $1 owed. The rest is written off. How much is written off as an irrecoverable debt?",
    "options": [
      "$0",
      "$225",
      "$675",
      "$900"
    ],
    "answer": 2,
    "explanation": "The customer pays 25% of 900 = $225. The remaining 900 minus 225 = $675 is written off.",
    "optionFeedback": [
      "Part of the debt cannot be collected, so something must be written off.",
      "This is the amount the customer paid.",
      "Correct. The customer pays 25% of 900 = $225. The remaining 900 minus 225 = $675 is written off.",
      "This is the whole debt. $225 of it was paid."
    ]
  },
  {
    "id": "o7707-4.4-06",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "easy",
    "question": "A customer's debt of $300 is written off as irrecoverable. What is the journal entry?",
    "options": [
      "Debit irrecoverable debts, credit bank",
      "Debit the customer's account, credit irrecoverable debts",
      "Debit bank, credit the customer's account",
      "Debit irrecoverable debts, credit the customer's account"
    ],
    "answer": 3,
    "explanation": "The debt is removed from the customer's account and charged as an expense.",
    "optionFeedback": [
      "No money has been paid.",
      "This is the wrong way round.",
      "No money has been received.",
      "Correct. The debt is removed from the customer's account and charged as an expense."
    ]
  },
  {
    "id": "o7707-4.4-07",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "The allowance for irrecoverable debts is reduced from $1500 to $1100. What is the effect on profit?",
    "options": [
      "Profit decreases by $1100",
      "Profit increases by $1100",
      "Profit decreases by $400",
      "Profit increases by $400"
    ],
    "answer": 3,
    "explanation": "The reduction of $400 is shown as income (or a reduction in expenses).",
    "optionFeedback": [
      "Only the change affects profit, and a decrease adds to profit.",
      "Only the change in the allowance affects profit.",
      "A smaller allowance means less expense, so profit rises.",
      "Correct. The reduction of $400 is shown as income (or a reduction in expenses)."
    ]
  },
  {
    "id": "o7707-4.4-08",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "hard",
    "question": "Trade receivables at the year end are $24 000. The allowance for irrecoverable debts is to be 5% of trade receivables. The existing allowance is $800. What amount is charged against profit for the allowance this year?",
    "options": [
      "$400",
      "$800",
      "$1200",
      "$2000"
    ],
    "answer": 0,
    "explanation": "New allowance = 5% of 24 000 = 1200. Increase = 1200 minus 800 = $400.",
    "optionFeedback": [
      "Correct. New allowance = 5% of 24 000 = 1200. Increase = 1200 minus 800 = $400.",
      "This is the existing allowance.",
      "This is the whole new allowance. Only the increase is charged.",
      "This adds the old allowance to the new one."
    ]
  },
  {
    "id": "o7707-4.4-09",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "What is the difference between an irrecoverable debt and an allowance for irrecoverable debts?",
    "options": [
      "They mean the same thing",
      "An irrecoverable debt is only an estimate",
      "An allowance is written off individual customer accounts",
      "An irrecoverable debt will not be paid and is written off; an allowance is an estimate of debts that may not be paid"
    ],
    "answer": 3,
    "explanation": "Specific bad debts are written off. The allowance is a general estimate shown against trade receivables.",
    "optionFeedback": [
      "One is a known loss and the other is an estimate.",
      "An irrecoverable debt is a specific, known loss.",
      "Customer accounts are not changed by the allowance.",
      "Correct. Specific bad debts are written off. The allowance is a general estimate shown against trade receivables."
    ]
  },
  {
    "id": "o7707-4.4-10",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "easy",
    "question": "Where is the allowance for irrecoverable debts shown in the statement of financial position?",
    "options": [
      "In non-current liabilities",
      "Deducted from trade receivables in current assets",
      "Added to trade receivables",
      "In current liabilities"
    ],
    "answer": 1,
    "explanation": "Trade receivables are shown net of the allowance.",
    "optionFeedback": [
      "The allowance is not a loan.",
      "Correct. Trade receivables are shown net of the allowance.",
      "It reduces the amount expected to be collected.",
      "The allowance is not owed to anyone."
    ]
  },
  {
    "id": "o7707-4.4-11",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "medium",
    "question": "A debt of $650 is written off. What is the effect on the statement of financial position?",
    "options": [
      "Trade receivables increase by $650",
      "Trade receivables decrease by $650 and owner's equity decreases by $650",
      "Trade receivables decrease by $650 and liabilities decrease by $650",
      "There is no effect"
    ],
    "answer": 1,
    "explanation": "The asset is removed, and the expense reduces profit and so owner's equity.",
    "optionFeedback": [
      "Writing off reduces trade receivables.",
      "Correct. The asset is removed, and the expense reduces profit and so owner's equity.",
      "Writing off a debt does not change what the business owes.",
      "An asset is lost and profit falls."
    ]
  },
  {
    "id": "o7707-4.4-12",
    "level": "O Level 7707",
    "topic": "4.4",
    "topicTitle": "Irrecoverable debts and allowance for irrecoverable debts",
    "difficulty": "easy",
    "question": "Which situation most likely makes a debt irrecoverable?",
    "options": [
      "The customer returns faulty goods",
      "The customer's business has closed and the owner cannot be traced",
      "The customer asks for a copy of the invoice",
      "The customer pays one week late"
    ],
    "answer": 1,
    "explanation": "A debt is irrecoverable when there is no realistic chance of being paid.",
    "optionFeedback": [
      "Returns are recorded with a credit note, not written off.",
      "Correct. A debt is irrecoverable when there is no realistic chance of being paid.",
      "Asking for a copy does not mean the customer will not pay.",
      "A late payment is still a payment."
    ]
  },
  {
    "id": "o7707-4.5-01",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "hard",
    "question": "At the year end a shop has 40 units of a product which cost $15 each and normally sell for $25. Ten of the units are damaged. They can be sold for $12 each after a repair costing $4 each. What is the value of this inventory?",
    "options": [
      "$450",
      "$530",
      "$570",
      "$600"
    ],
    "answer": 1,
    "explanation": "Undamaged: 30 x 15 = 450 (cost is lower). Damaged: net realisable value 12 minus 4 = 8, lower than cost, so 10 x 8 = 80. Total 450 + 80 = $530.",
    "optionFeedback": [
      "This leaves out the damaged units completely. They still have a value of $8 each.",
      "Correct. Undamaged: 30 x 15 = 450 (cost is lower). Damaged: net realisable value 12 minus 4 = 8, lower than cost, so 10 x 8 = 80. Total 450 + 80 = $530.",
      "This values damaged units at $12 and ignores the $4 repair cost.",
      "This values every unit at cost, although the damaged units are worth less than cost."
    ]
  },
  {
    "id": "o7707-4.5-02",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "medium",
    "question": "Closing inventory was overstated by $800. What is the effect on the financial statements for the year?",
    "options": [
      "No effect on profit and current assets overstated by $800",
      "Profit understated by $800 and current assets overstated by $800",
      "Profit overstated by $800 and current assets overstated by $800",
      "Profit overstated by $800 and current assets understated by $800"
    ],
    "answer": 2,
    "explanation": "Higher closing inventory reduces cost of sales, so gross profit and profit are too high, and the inventory figure in current assets is too high.",
    "optionFeedback": [
      "Closing inventory affects cost of sales, so profit is affected.",
      "Higher closing inventory reduces cost of sales, so profit is too high, not too low.",
      "Correct. Higher closing inventory reduces cost of sales, so gross profit and profit are too high, and the inventory figure in current assets is too high.",
      "The inventory figure is too high, so current assets are overstated."
    ]
  },
  {
    "id": "o7707-4.5-03",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "easy",
    "question": "Which cost is included in the cost of inventory?",
    "options": [
      "Sales staff commission",
      "Carriage outwards to customers",
      "Carriage inwards on the goods",
      "Advertising the goods"
    ],
    "answer": 2,
    "explanation": "Cost includes bringing the goods to their present location and condition, so carriage inwards is included. Selling costs are not.",
    "optionFeedback": [
      "Sales commission is a selling cost.",
      "Carriage outwards is a selling cost.",
      "Correct. Cost includes bringing the goods to their present location and condition, so carriage inwards is included. Selling costs are not.",
      "Advertising is a selling cost."
    ]
  },
  {
    "id": "o7707-4.5-04",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "easy",
    "question": "Why is inventory valued at the lower of cost and net realisable value?",
    "options": [
      "To show the selling price of the goods",
      "To apply prudence so that assets and profit are not overstated",
      "To make the profit as high as possible",
      "Because cost is always lower"
    ],
    "answer": 1,
    "explanation": "If goods can only be sold for less than they cost, valuing them at cost would overstate assets and profit.",
    "optionFeedback": [
      "Inventory is not valued at selling price, because that would include profit not yet earned.",
      "Correct. If goods can only be sold for less than they cost, valuing them at cost would overstate assets and profit.",
      "The rule does the opposite. It stops profit being overstated.",
      "Cost is not always lower. Damaged or out-of-date goods may sell for less than cost."
    ]
  },
  {
    "id": "o7707-4.5-05",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "hard",
    "question": "At the end of year 1 closing inventory was understated by $500 and the error was not corrected. What is the effect on the profit for year 2?",
    "options": [
      "No effect",
      "Overstated by $1000",
      "Overstated by $500",
      "Understated by $500"
    ],
    "answer": 2,
    "explanation": "Year 1 closing inventory becomes year 2 opening inventory. Opening inventory that is too low makes year 2 cost of sales too low, so year 2 profit is $500 too high.",
    "optionFeedback": [
      "The error is carried forward, because year 1 closing inventory becomes year 2 opening inventory.",
      "The error is $500, not double.",
      "Correct. Year 1 closing inventory becomes year 2 opening inventory. Opening inventory that is too low makes year 2 cost of sales too low, so year 2 profit is $500 too high.",
      "This is the wrong way round. Low opening inventory makes year 2 profit too high."
    ]
  },
  {
    "id": "o7707-4.5-06",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "easy",
    "question": "A business has 200 units that cost $8 each. Their net realisable value is $9.50 each. What is the value of this inventory?",
    "options": [
      "$300",
      "$1600",
      "$1750",
      "$1900"
    ],
    "answer": 1,
    "explanation": "Lower of cost and net realisable value: cost is lower, so 200 x 8 = $1600.",
    "optionFeedback": [
      "This is the expected profit, not the inventory value.",
      "Correct. Lower of cost and net realisable value: cost is lower, so 200 x 8 = $1600.",
      "This uses an average of cost and selling value.",
      "This uses net realisable value, which is higher than cost."
    ]
  },
  {
    "id": "o7707-4.5-07",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "medium",
    "question": "A shop has 50 units that cost $20 each. They can be sold for $18 each, but selling costs of $1 per unit will be paid. What is the value of this inventory?",
    "options": [
      "$850",
      "$900",
      "$950",
      "$1000"
    ],
    "answer": 0,
    "explanation": "Net realisable value = 18 minus 1 = 17, lower than cost. 50 x 17 = $850.",
    "optionFeedback": [
      "Correct. Net realisable value = 18 minus 1 = 17, lower than cost. 50 x 17 = $850.",
      "This uses the selling price and forgets the selling costs.",
      "This adds the selling costs instead of deducting them.",
      "This uses cost, which is higher than net realisable value."
    ]
  },
  {
    "id": "o7707-4.5-08",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "medium",
    "question": "Closing inventory was understated by $600. What is the effect on cost of sales for the year?",
    "options": [
      "Cost of sales overstated by $1200",
      "Cost of sales overstated by $600",
      "No effect on cost of sales",
      "Cost of sales understated by $600"
    ],
    "answer": 1,
    "explanation": "Cost of sales = opening inventory + purchases minus closing inventory. Deducting too little makes it too high.",
    "optionFeedback": [
      "The error is $600, not double.",
      "Correct. Cost of sales = opening inventory + purchases minus closing inventory. Deducting too little makes it too high.",
      "Closing inventory is deducted in cost of sales, so it is affected.",
      "Lower closing inventory makes cost of sales higher, not lower."
    ]
  },
  {
    "id": "o7707-4.5-09",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "easy",
    "question": "Which goods should be valued below cost?",
    "options": [
      "Goods that can only be sold for less than they cost",
      "Goods with a high mark-up",
      "Goods bought recently",
      "Goods paid for in cash"
    ],
    "answer": 0,
    "explanation": "When net realisable value is below cost, it becomes the inventory value.",
    "optionFeedback": [
      "Correct. When net realisable value is below cost, it becomes the inventory value.",
      "These are valued at cost, which is lower than selling value.",
      "When they were bought does not matter.",
      "How they were paid for does not matter."
    ]
  },
  {
    "id": "o7707-4.5-10",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "easy",
    "question": "Why does a business count its inventory at the year end?",
    "options": [
      "To check the bank balance",
      "To find the purchases for the year",
      "To find the quantity of goods held so that closing inventory can be valued",
      "To calculate sales for the year"
    ],
    "answer": 2,
    "explanation": "A physical count gives the quantities, which are then valued at the lower of cost and net realisable value.",
    "optionFeedback": [
      "The bank balance is checked with a bank reconciliation.",
      "Purchases come from the purchases records.",
      "Correct. A physical count gives the quantities, which are then valued at the lower of cost and net realisable value.",
      "Sales come from the sales records."
    ]
  },
  {
    "id": "o7707-4.5-11",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "medium",
    "question": "Opening inventory was $9000, purchases were $41 000 and closing inventory was $11 000. What was the cost of sales?",
    "options": [
      "$39 000",
      "$41 000",
      "$43 000",
      "$61 000"
    ],
    "answer": 0,
    "explanation": "9000 + 41 000 minus 11 000 = $39 000.",
    "optionFeedback": [
      "Correct. 9000 + 41 000 minus 11 000 = $39 000.",
      "This is the purchases figure only.",
      "This reverses opening and closing inventory.",
      "This adds closing inventory instead of deducting it."
    ]
  },
  {
    "id": "o7707-4.5-12",
    "level": "O Level 7707",
    "topic": "4.5",
    "topicTitle": "Valuation of inventory",
    "difficulty": "medium",
    "question": "This year's opening inventory was overstated by $400. What is the effect on this year's profit?",
    "options": [
      "Understated by $400",
      "No effect",
      "Overstated by $400",
      "Understated by $800"
    ],
    "answer": 0,
    "explanation": "Opening inventory is added in cost of sales, so too high a figure reduces gross profit and profit.",
    "optionFeedback": [
      "Correct. Opening inventory is added in cost of sales, so too high a figure reduces gross profit and profit.",
      "Opening inventory is part of cost of sales, so profit is affected.",
      "Higher opening inventory increases cost of sales, so profit is too low.",
      "The error is $400, not double."
    ]
  },
  {
    "id": "o7707-5.1-01",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "What is an advantage of operating as a sole trader?",
    "options": [
      "It is easy to raise large amounts of capital",
      "The owner has limited liability",
      "The owner keeps all of the profit",
      "The business continues if the owner dies"
    ],
    "answer": 2,
    "explanation": "A sole trader keeps all profits and makes decisions alone. Liability is unlimited and raising capital can be difficult.",
    "optionFeedback": [
      "A sole trader often finds it hard to raise large amounts of capital.",
      "A sole trader has unlimited liability.",
      "Correct. A sole trader keeps all profits and makes decisions alone. Liability is unlimited and raising capital can be difficult.",
      "The business may end if the owner dies."
    ]
  },
  {
    "id": "o7707-5.1-02",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "hard",
    "question": "A trader provided this information for the year. What is the gross profit?",
    "options": [
      "$23 700",
      "$25 500",
      "$26 200",
      "$27 000"
    ],
    "answer": 1,
    "explanation": "Net revenue = 64 000 minus 1500 = 62 500. Cost of sales = 5200 + 38 000 + 700 minus 900 minus 6000 = 37 000. Gross profit = 62 500 minus 37 000 = $25 500.",
    "optionFeedback": [
      "This adds returns outwards to cost of sales instead of deducting them.",
      "Correct. Net revenue = 64 000 minus 1500 = 62 500. Cost of sales = 5200 + 38 000 + 700 minus 900 minus 6000 = 37 000. Gross profit = 62 500 minus 37 000 = $25 500.",
      "This treats carriage inwards as an expense below gross profit. It belongs in cost of sales.",
      "This ignores returns inwards."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "revenue",
          "64 000"
        ],
        [
          "returns inwards",
          "1 500"
        ],
        [
          "opening inventory",
          "5 200"
        ],
        [
          "purchases",
          "38 000"
        ],
        [
          "carriage inwards",
          "700"
        ],
        [
          "returns outwards",
          "900"
        ],
        [
          "closing inventory",
          "6 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.1-03",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "Which item is a non-current liability of a sole trader?",
    "options": [
      "A bank overdraft",
      "Trade payables",
      "Wages owing",
      "A bank loan repayable in five years"
    ],
    "answer": 3,
    "explanation": "Non-current liabilities are due after more than 12 months. The others are current liabilities.",
    "optionFeedback": [
      "A bank overdraft is repayable on demand, a current liability.",
      "Trade payables are usually due within weeks, a current liability.",
      "Wages owing are due soon, a current liability.",
      "Correct. Non-current liabilities are due after more than 12 months. The others are current liabilities."
    ]
  },
  {
    "id": "o7707-5.1-04",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "How do drawings affect the statement of financial position of a sole trader?",
    "options": [
      "They are shown as an expense",
      "They increase non-current assets",
      "They increase liabilities",
      "They reduce owner's equity"
    ],
    "answer": 3,
    "explanation": "Drawings are deducted from capital. They are not a business expense.",
    "optionFeedback": [
      "Drawings are not a business expense.",
      "Drawings do not add any assets.",
      "Drawings are not owed to anyone, so they do not increase liabilities.",
      "Correct. Drawings are deducted from capital. They are not a business expense."
    ]
  },
  {
    "id": "o7707-5.1-05",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "medium",
    "question": "A tax adviser works as a sole trader and sells no goods. Which item appears in her statement of profit or loss?",
    "options": [
      "Cost of sales",
      "Surplus for the year",
      "Gross profit",
      "Profit for the year"
    ],
    "answer": 3,
    "explanation": "A service business has no cost of sales, so there is no gross profit. It shows fees earned, expenses and profit for the year. Surplus is used by clubs.",
    "optionFeedback": [
      "A service business sells no goods, so it has no cost of sales.",
      "Surplus is used by clubs and societies.",
      "A service business sells no goods, so it has no gross profit.",
      "Correct. A service business has no cost of sales, so there is no gross profit. It shows fees earned, expenses and profit for the year. Surplus is used by clubs."
    ]
  },
  {
    "id": "o7707-5.1-06",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "What is a disadvantage of being a sole trader?",
    "options": [
      "Decisions are slow because many people are involved",
      "The accounts must be published",
      "Profits must be shared with partners",
      "The owner's personal possessions may be used to pay business debts"
    ],
    "answer": 3,
    "explanation": "A sole trader has unlimited liability.",
    "optionFeedback": [
      "A sole trader makes decisions alone, so they can be quick.",
      "Sole traders do not have to publish their accounts.",
      "A sole trader keeps all the profit.",
      "Correct. A sole trader has unlimited liability."
    ]
  },
  {
    "id": "o7707-5.1-07",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "medium",
    "question": "A trader made a gross profit of $30 000. Expenses were $18 000, discount received was $400 and rent received was $1200. What was the profit for the year?",
    "options": [
      "$10 400",
      "$12 000",
      "$12 400",
      "$13 600"
    ],
    "answer": 3,
    "explanation": "30 000 + 400 + 1200 minus 18 000 = $13 600.",
    "optionFeedback": [
      "This deducts the other income instead of adding it.",
      "This leaves out the other income.",
      "This forgets the rent received.",
      "Correct. 30 000 + 400 + 1200 minus 18 000 = $13 600."
    ]
  },
  {
    "id": "o7707-5.1-08",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "Where is carriage outwards shown in a trader's statement of profit or loss?",
    "options": [
      "Added to closing inventory",
      "In cost of sales",
      "As an expense after gross profit",
      "Deducted from revenue"
    ],
    "answer": 2,
    "explanation": "Carriage outwards is a cost of delivering goods to customers, a selling expense.",
    "optionFeedback": [
      "Delivering goods to customers is not part of inventory cost.",
      "Carriage inwards goes in cost of sales. Carriage outwards is a selling cost.",
      "Correct. Carriage outwards is a cost of delivering goods to customers, a selling expense.",
      "Only returns inwards are deducted from revenue."
    ]
  },
  {
    "id": "o7707-5.1-09",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "Which item is a current asset?",
    "options": [
      "Premises",
      "A bank loan",
      "Trade payables",
      "Trade receivables"
    ],
    "answer": 3,
    "explanation": "Amounts owed by customers are expected to be received within a year, so they are a current asset.",
    "optionFeedback": [
      "Premises are a non-current asset.",
      "A loan is a liability.",
      "Trade payables are a current liability.",
      "Correct. Amounts owed by customers are expected to be received within a year, so they are a current asset."
    ]
  },
  {
    "id": "o7707-5.1-10",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "medium",
    "question": "A sole trader's capital was $25 000 at the start of the year. Profit was $9000, drawings were $7500 and she introduced extra capital of $2000. What is her capital at the end of the year?",
    "options": [
      "$26 500",
      "$28 500",
      "$36 000",
      "$43 500"
    ],
    "answer": 1,
    "explanation": "25 000 + 9000 + 2000 minus 7500 = $28 500.",
    "optionFeedback": [
      "This forgets the extra capital introduced.",
      "Correct. 25 000 + 9000 + 2000 minus 7500 = $28 500.",
      "This forgets to deduct drawings.",
      "This adds drawings instead of deducting them."
    ]
  },
  {
    "id": "o7707-5.1-11",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "How are returns inwards treated in a trader's statement of profit or loss?",
    "options": [
      "Added to revenue",
      "Deducted from revenue",
      "Added to purchases",
      "Shown as an expense"
    ],
    "answer": 1,
    "explanation": "Returns inwards reduce sales, so net revenue = revenue minus returns inwards.",
    "optionFeedback": [
      "Goods returned by customers reduce sales.",
      "Correct. Returns inwards reduce sales, so net revenue = revenue minus returns inwards.",
      "Returns inwards come from customers, not suppliers.",
      "They reduce sales; they are not an expense."
    ]
  },
  {
    "id": "o7707-5.1-12",
    "level": "O Level 7707",
    "topic": "5.1",
    "topicTitle": "Sole traders",
    "difficulty": "easy",
    "question": "A trader has current assets of $18 000 and current liabilities of $11 500. What is her working capital (net current assets)?",
    "options": [
      "$6500",
      "$11 500",
      "$18 000",
      "$29 500"
    ],
    "answer": 0,
    "explanation": "Working capital = current assets minus current liabilities = 18 000 minus 11 500 = $6500.",
    "optionFeedback": [
      "Correct. Working capital = current assets minus current liabilities = 18 000 minus 11 500 = $6500.",
      "This is the current liabilities.",
      "This is the current assets.",
      "This adds the two instead of subtracting."
    ]
  },
  {
    "id": "o7707-5.2-01",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "hard",
    "question": "Saad and Imran are partners sharing profits and losses equally. Profit for the year was $60 000. What is Imran's share of the residual profit?",
    "options": [
      "$23 500",
      "$24 000",
      "$30 000",
      "$34 000"
    ],
    "answer": 1,
    "explanation": "Residual profit = 60 000 minus 3000 minus 2000 minus 8000 + 400 + 600 = $48 000. Shared equally: $24 000 each. Interest on drawings is added back because partners pay it to the business.",
    "optionFeedback": [
      "This forgets to add back interest on drawings.",
      "Correct. Residual profit = 60 000 minus 3000 minus 2000 minus 8000 + 400 + 600 = $48 000. Shared equally: $24 000 each. Interest on drawings is added back because partners pay it to the business.",
      "This shares the whole profit before interest and salary are appropriated.",
      "This is Imran's total credit: interest on capital, salary and residual profit. The question asks for the residual share only."
    ],
    "table": {
      "headers": [
        "item",
        "Saad $",
        "Imran $"
      ],
      "rows": [
        [
          "interest on capital",
          "3 000",
          "2 000"
        ],
        [
          "partner's salary",
          "nil",
          "8 000"
        ],
        [
          "interest on drawings",
          "400",
          "600"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.2-02",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "medium",
    "question": "Partner Aisha has lent the partnership $20 000 at 5% interest per year. How is the interest on this loan recorded?",
    "options": [
      "As a deduction from Aisha's current account",
      "As an appropriation in the appropriation account",
      "As an expense in the statement of profit or loss",
      "As an addition to Aisha's capital account"
    ],
    "answer": 2,
    "explanation": "Interest on a partner's loan is a business expense charged before profit is shared, like interest to any lender.",
    "optionFeedback": [
      "The interest is owed to Aisha, so it is not deducted from her account.",
      "Loan interest is not a share of profit, so it is not an appropriation.",
      "Correct. Interest on a partner's loan is a business expense charged before profit is shared, like interest to any lender.",
      "Interest is not new capital introduced."
    ]
  },
  {
    "id": "o7707-5.2-03",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "medium",
    "question": "Partners keep fixed capital accounts. Where are their drawings recorded?",
    "options": [
      "In the appropriation account as income",
      "In the statement of profit or loss",
      "In their current accounts",
      "In their capital accounts"
    ],
    "answer": 2,
    "explanation": "With fixed capital accounts, day-to-day items such as drawings, salaries and shares of profit go through the current accounts.",
    "optionFeedback": [
      "Drawings are not income.",
      "Drawings are not a business expense.",
      "Correct. With fixed capital accounts, day-to-day items such as drawings, salaries and shares of profit go through the current accounts.",
      "With fixed capital accounts, the capital accounts do not change for drawings."
    ]
  },
  {
    "id": "o7707-5.2-04",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "easy",
    "question": "Which is a disadvantage of a partnership compared with a sole trader?",
    "options": [
      "More capital can be raised",
      "Partners may disagree on how to run the business",
      "Responsibilities can be shared",
      "Partners can bring different skills"
    ],
    "answer": 1,
    "explanation": "Shared decisions can lead to disagreement. The other points are advantages of a partnership.",
    "optionFeedback": [
      "Raising more capital is an advantage of a partnership.",
      "Correct. Shared decisions can lead to disagreement. The other points are advantages of a partnership.",
      "Sharing responsibilities is an advantage.",
      "Bringing different skills is an advantage."
    ]
  },
  {
    "id": "o7707-5.2-05",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "medium",
    "question": "Where is a partner's salary entered in the partnership's books?",
    "options": [
      "Debit the statement of profit or loss, credit bank",
      "Debit the partner's capital account, credit bank",
      "Debit the partner's current account, credit the appropriation account",
      "Debit the appropriation account, credit the partner's current account"
    ],
    "answer": 3,
    "explanation": "A partner's salary is a share of profit, not an expense. It is appropriated from profit and credited to the partner.",
    "optionFeedback": [
      "A partner's salary is an appropriation of profit, not an expense, and it may not be paid in cash.",
      "With fixed capital accounts, salary goes to the current account.",
      "This is the wrong way round.",
      "Correct. A partner's salary is a share of profit, not an expense. It is appropriated from profit and credited to the partner."
    ]
  },
  {
    "id": "o7707-5.2-06",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "medium",
    "question": "Partner Huda has a fixed capital of $40 000. The agreement allows interest on capital at 5% per year. How is this recorded?",
    "options": [
      "$2000 debited to Huda's current account",
      "$2000 credited to Huda's current account",
      "$40 000 credited to Huda's current account",
      "$2000 charged as an expense in the statement of profit or loss"
    ],
    "answer": 1,
    "explanation": "5% of 40 000 = $2000, debited to the appropriation account and credited to her current account.",
    "optionFeedback": [
      "Interest on capital is a reward to the partner, so it is credited.",
      "Correct. 5% of 40 000 = $2000, debited to the appropriation account and credited to her current account.",
      "Only the interest, 5% of 40 000, is credited.",
      "Interest on capital is an appropriation of profit, not an expense."
    ]
  },
  {
    "id": "o7707-5.2-07",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "easy",
    "question": "Why might a partnership agreement charge interest on drawings?",
    "options": [
      "To discourage partners from taking drawings early or in large amounts",
      "To record an expense of the business",
      "To reward partners for investing capital",
      "To increase partners' salaries"
    ],
    "answer": 0,
    "explanation": "Charging interest makes early drawings cost the partner, which protects the firm's cash.",
    "optionFeedback": [
      "Correct. Charging interest makes early drawings cost the partner, which protects the firm's cash.",
      "Interest on drawings is an appropriation, not an expense.",
      "That is the purpose of interest on capital.",
      "It reduces what partners receive."
    ]
  },
  {
    "id": "o7707-5.2-08",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "hard",
    "question": "Information about partner Kamal's current account for the year is shown below. What is the closing balance?",
    "options": [
      "$1200 credit",
      "$4200 credit",
      "$7200 credit",
      "$7800 credit"
    ],
    "answer": 2,
    "explanation": "3000 + 21 000 + 6000 + 1500 minus 24 000 minus 300 = $7200 credit.",
    "optionFeedback": [
      "This forgets the partner's salary.",
      "This forgets the opening balance.",
      "Correct. 3000 + 21 000 + 6000 + 1500 minus 24 000 minus 300 = $7200 credit.",
      "This adds interest on drawings instead of deducting it."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "opening balance (credit)",
          "3 000"
        ],
        [
          "share of residual profit",
          "21 000"
        ],
        [
          "partner's salary",
          "6 000"
        ],
        [
          "interest on capital",
          "1 500"
        ],
        [
          "drawings",
          "24 000"
        ],
        [
          "interest on drawings",
          "300"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.2-09",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "easy",
    "question": "What is an advantage of a partnership compared with a sole trader?",
    "options": [
      "More capital can be brought into the business",
      "The business continues for ever",
      "Partners have limited liability",
      "There is no need to share profits"
    ],
    "answer": 0,
    "explanation": "Each partner can contribute capital, so more money is available.",
    "optionFeedback": [
      "Correct. Each partner can contribute capital, so more money is available.",
      "A partnership can end when a partner leaves or dies.",
      "Ordinary partners have unlimited liability.",
      "Partners share the profits."
    ]
  },
  {
    "id": "o7707-5.2-10",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "hard",
    "question": "Nadia and Omar split any residual profit or loss 2 : 1. Profit for the year was $10 000. Interest on capital is Nadia $4000 and Omar $3000, and Omar receives a salary of $6000. What is Nadia's share of the residual amount?",
    "options": [
      "A profit of $2000",
      "A loss of $1000",
      "A profit of $6667",
      "A loss of $2000"
    ],
    "answer": 3,
    "explanation": "Residual = 10 000 minus 4000 minus 3000 minus 6000 = minus 3000. Nadia's two-thirds share is a loss of $2000.",
    "optionFeedback": [
      "After interest and salary of $13 000, there is a loss, not a profit.",
      "This is Omar's share of the residual loss.",
      "This shares the whole profit before interest and salary.",
      "Correct. Residual = 10 000 minus 4000 minus 3000 minus 6000 = minus 3000. Nadia's two-thirds share is a loss of $2000."
    ]
  },
  {
    "id": "o7707-5.2-11",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "easy",
    "question": "Which item is usually included in a partnership agreement?",
    "options": [
      "The names of the business's customers",
      "The rate of tax the business pays",
      "The selling prices of goods",
      "The ratio in which profits and losses are shared"
    ],
    "answer": 3,
    "explanation": "Agreements cover capital, profit sharing, interest, salaries and drawings.",
    "optionFeedback": [
      "This is not part of the agreement between partners.",
      "Tax rates are set by the government.",
      "Prices are business decisions, not agreement terms.",
      "Correct. Agreements cover capital, profit sharing, interest, salaries and drawings."
    ]
  },
  {
    "id": "o7707-5.2-12",
    "level": "O Level 7707",
    "topic": "5.2",
    "topicTitle": "Partnerships",
    "difficulty": "medium",
    "question": "A partner's current account has a credit balance. What does this show?",
    "options": [
      "The partnership has a bank overdraft",
      "The partner owes money to the partnership",
      "The partnership owes the partner profits that have not been withdrawn",
      "The partner's fixed capital"
    ],
    "answer": 2,
    "explanation": "The partner has been credited with more than he or she has drawn.",
    "optionFeedback": [
      "An overdraft is in the cash book.",
      "That would be a debit balance.",
      "Correct. The partner has been credited with more than he or she has drawn.",
      "Capital is in the separate capital account."
    ]
  },
  {
    "id": "o7707-5.3-01",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "medium",
    "question": "A company provided this information. What is its total equity?",
    "options": [
      "$400 000",
      "$505 000",
      "$605 000",
      "$635 000"
    ],
    "answer": 1,
    "explanation": "Equity = share capital + reserves = 400 000 + 40 000 + 65 000 = $505 000. Debentures and the bank loan are liabilities.",
    "optionFeedback": [
      "This is share capital only. Reserves are also part of equity.",
      "Correct. Equity = share capital + reserves = 400 000 + 40 000 + 65 000 = $505 000. Debentures and the bank loan are liabilities.",
      "This includes the debentures, which are a liability.",
      "This includes the debentures and the bank loan, which are liabilities."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "ordinary share capital",
          "400 000"
        ],
        [
          "general reserve",
          "40 000"
        ],
        [
          "retained earnings",
          "65 000"
        ],
        [
          "6% debentures",
          "100 000"
        ],
        [
          "bank loan",
          "30 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.3-02",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "hard",
    "question": "A company's retained earnings at the start of the year were $52 000. Profit for the year was $31 000, dividends paid were $12 000 and $5000 was transferred to the general reserve. What are the retained earnings at the end of the year?",
    "options": [
      "$66 000",
      "$71 000",
      "$78 000",
      "$83 000"
    ],
    "answer": 0,
    "explanation": "52 000 + 31 000 minus 12 000 minus 5000 = $66 000.",
    "optionFeedback": [
      "Correct. 52 000 + 31 000 minus 12 000 minus 5000 = $66 000.",
      "This forgets the transfer to the general reserve.",
      "This forgets to deduct the dividends paid.",
      "This forgets both the dividends and the transfer."
    ]
  },
  {
    "id": "o7707-5.3-03",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "A private limited company fails, owing $500 000. Zainab owns 2000 fully paid $1 shares in it. What is the most she can lose?",
    "options": [
      "$2000",
      "$0",
      "All of her personal savings",
      "$500 000"
    ],
    "answer": 0,
    "explanation": "With limited liability a shareholder can lose only what she paid, or agreed to pay, for her shares.",
    "optionFeedback": [
      "Correct. With limited liability a shareholder can lose only what she paid, or agreed to pay, for her shares.",
      "Zainab would lose the $2000 paid for her shares.",
      "Limited liability protects her personal savings.",
      "The company's debts are not her personal debts."
    ]
  },
  {
    "id": "o7707-5.3-04",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "Where are debentures shown in a company's statement of financial position?",
    "options": [
      "Non-current assets",
      "Current assets",
      "Non-current liabilities",
      "Equity"
    ],
    "answer": 2,
    "explanation": "Debentures are long-term loans to the company, so they are non-current liabilities, not part of equity.",
    "optionFeedback": [
      "Debentures are not assets.",
      "Debentures are not assets.",
      "Correct. Debentures are long-term loans to the company, so they are non-current liabilities, not part of equity.",
      "Debentures are loans, not part of equity."
    ]
  },
  {
    "id": "o7707-5.3-05",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "medium",
    "question": "Which shareholders normally receive a fixed rate of dividend before any dividend is paid on other shares?",
    "options": [
      "Debenture holders",
      "Ordinary shareholders",
      "Preference shareholders",
      "Directors"
    ],
    "answer": 2,
    "explanation": "Preference shares carry a fixed dividend paid before ordinary dividends. Debenture holders receive interest, not dividends.",
    "optionFeedback": [
      "Debenture holders receive interest, not dividends.",
      "Ordinary shareholders are paid after preference shareholders and their dividend varies.",
      "Correct. Preference shares carry a fixed dividend paid before ordinary dividends. Debenture holders receive interest, not dividends.",
      "Directors manage the company. They are not a class of shareholder."
    ]
  },
  {
    "id": "o7707-5.3-06",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "Where are ordinary dividends paid shown in a limited company's financial statements?",
    "options": [
      "As a non-current asset",
      "As a non-current liability",
      "In the statement of changes in equity",
      "As an expense in the statement of profit or loss"
    ],
    "answer": 2,
    "explanation": "Dividends reduce retained earnings in the statement of changes in equity.",
    "optionFeedback": [
      "Dividends paid are not an asset.",
      "Dividends already paid are not owed.",
      "Correct. Dividends reduce retained earnings in the statement of changes in equity.",
      "Dividends are a distribution of profit, not an expense."
    ]
  },
  {
    "id": "o7707-5.3-07",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "medium",
    "question": "A company transfers $10 000 from retained earnings to the general reserve. What is the effect on total equity?",
    "options": [
      "No change",
      "Cash increases by $10 000",
      "It decreases by $10 000",
      "It increases by $10 000"
    ],
    "answer": 0,
    "explanation": "Retained earnings fall and the general reserve rises by the same amount.",
    "optionFeedback": [
      "Correct. Retained earnings fall and the general reserve rises by the same amount.",
      "A transfer between reserves does not involve cash.",
      "Nothing leaves equity.",
      "The amount moves between two parts of equity."
    ]
  },
  {
    "id": "o7707-5.3-08",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "How is debenture interest recorded by a company?",
    "options": [
      "Deducted from share capital",
      "It is not recorded",
      "In the statement of changes in equity",
      "As an expense in the statement of profit or loss"
    ],
    "answer": 3,
    "explanation": "Debenture holders are lenders, so interest paid to them is a finance cost.",
    "optionFeedback": [
      "Interest does not reduce share capital.",
      "Interest on loans is a real cost to the company.",
      "That is where dividends are shown, not interest.",
      "Correct. Debenture holders are lenders, so interest paid to them is a finance cost."
    ]
  },
  {
    "id": "o7707-5.3-09",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "What are retained earnings?",
    "options": [
      "Profits kept in the company and not paid out as dividends",
      "Money the company owes to shareholders",
      "The value of shares issued",
      "The cash in the company's bank account"
    ],
    "answer": 0,
    "explanation": "Retained earnings build up from profits less dividends and transfers.",
    "optionFeedback": [
      "Correct. Retained earnings build up from profits less dividends and transfers.",
      "Retained earnings are equity, not a liability.",
      "That is share capital.",
      "Retained earnings may be invested in other assets, not held as cash."
    ]
  },
  {
    "id": "o7707-5.3-10",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "A company has 200 000 ordinary shares of $1 each and pays a dividend of 6 cents per share. What is the total dividend?",
    "options": [
      "$1200",
      "$6000",
      "$12 000",
      "$120 000"
    ],
    "answer": 2,
    "explanation": "200 000 x $0.06 = $12 000.",
    "optionFeedback": [
      "This is ten times too small.",
      "This uses 3 cents instead of 6 cents per share.",
      "Correct. 200 000 x $0.06 = $12 000.",
      "This is ten times too large."
    ]
  },
  {
    "id": "o7707-5.3-11",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "easy",
    "question": "What is a difference between a public and a private limited company?",
    "options": [
      "A private limited company has unlimited liability",
      "A public limited company can offer its shares to the general public",
      "A private limited company must be listed on a stock exchange",
      "A public limited company has no shareholders"
    ],
    "answer": 1,
    "explanation": "Private companies cannot sell shares to the general public.",
    "optionFeedback": [
      "Both types have limited liability.",
      "Correct. Private companies cannot sell shares to the general public.",
      "Only public companies can be listed.",
      "All companies are owned by shareholders."
    ]
  },
  {
    "id": "o7707-5.3-12",
    "level": "O Level 7707",
    "topic": "5.3",
    "topicTitle": "Limited companies",
    "difficulty": "medium",
    "question": "A company has total equity of $350 000. It issues 50 000 new ordinary shares of $1 each at $1 per share for cash. What is total equity after the issue?",
    "options": [
      "$300 000",
      "$350 000",
      "$400 000",
      "$450 000"
    ],
    "answer": 2,
    "explanation": "Share capital increases by $50 000, so equity = 350 000 + 50 000 = $400 000.",
    "optionFeedback": [
      "A share issue increases equity, it does not reduce it.",
      "The new share capital is added to equity.",
      "Correct. Share capital increases by $50 000, so equity = 350 000 + 50 000 = $400 000.",
      "50 000 shares at $1 adds $50 000, not $100 000."
    ]
  },
  {
    "id": "o7707-5.4-01",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "medium",
    "question": "A manufacturer provided this information. What is the prime cost?",
    "options": [
      "$48 000",
      "$76 500",
      "$78 000",
      "$87 000"
    ],
    "answer": 2,
    "explanation": "Raw materials consumed = 6000 + 48 000 + 1500 minus 7500 = 48 000. Prime cost = 48 000 + 30 000 direct wages = $78 000. Factory power is a factory overhead.",
    "optionFeedback": [
      "This is raw materials consumed only. Direct wages are part of prime cost.",
      "This leaves out carriage inwards, which is part of the cost of raw materials.",
      "Correct. Raw materials consumed = 6000 + 48 000 + 1500 minus 7500 = 48 000. Prime cost = 48 000 + 30 000 direct wages = $78 000. Factory power is a factory overhead.",
      "This includes factory power, which is a factory overhead."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "opening inventory of raw materials",
          "6 000"
        ],
        [
          "purchases of raw materials",
          "48 000"
        ],
        [
          "carriage inwards on raw materials",
          "1 500"
        ],
        [
          "closing inventory of raw materials",
          "7 500"
        ],
        [
          "direct wages",
          "30 000"
        ],
        [
          "factory power",
          "9 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.4-02",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "hard",
    "question": "Prime cost was $78 000 and factory overheads were $22 000. Work in progress was $4000 at the start of the year and $6500 at the end. What is the cost of production?",
    "options": [
      "$97 500",
      "$100 000",
      "$102 500",
      "$110 500"
    ],
    "answer": 0,
    "explanation": "78 000 + 22 000 = 100 000. Add opening work in progress and deduct closing: 100 000 + 4000 minus 6500 = $97 500.",
    "optionFeedback": [
      "Correct. 78 000 + 22 000 = 100 000. Add opening work in progress and deduct closing: 100 000 + 4000 minus 6500 = $97 500.",
      "This forgets the work in progress adjustment.",
      "This reverses the work in progress adjustment.",
      "This adds both opening and closing work in progress."
    ]
  },
  {
    "id": "o7707-5.4-03",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "Which cost is a factory overhead?",
    "options": [
      "Depreciation of factory machinery",
      "Office rent",
      "Carriage outwards",
      "Direct wages"
    ],
    "answer": 0,
    "explanation": "Factory overheads are indirect costs of the factory. Direct wages are part of prime cost; office rent and carriage outwards are in the statement of profit or loss.",
    "optionFeedback": [
      "Correct. Factory overheads are indirect costs of the factory. Direct wages are part of prime cost; office rent and carriage outwards are in the statement of profit or loss.",
      "Office rent goes in the statement of profit or loss.",
      "Carriage outwards is a selling expense.",
      "Direct wages are part of prime cost."
    ]
  },
  {
    "id": "o7707-5.4-04",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "medium",
    "question": "Rent of $18 000 is shared two-thirds to the factory and one-third to the office. How much rent is entered in the manufacturing account?",
    "options": [
      "$6000",
      "$9000",
      "$12 000",
      "$18 000"
    ],
    "answer": 2,
    "explanation": "Two-thirds of 18 000 = $12 000 goes to the manufacturing account. The office share, $6000, goes to the statement of profit or loss.",
    "optionFeedback": [
      "This is the office share.",
      "This splits the rent equally instead of two-thirds to one-third.",
      "Correct. Two-thirds of 18 000 = $12 000 goes to the manufacturing account. The office share, $6000, goes to the statement of profit or loss.",
      "This charges all the rent to the factory."
    ]
  },
  {
    "id": "o7707-5.4-05",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "How is the salary of a factory supervisor classified?",
    "options": [
      "Prime cost",
      "Selling expense",
      "Office expense",
      "Factory overhead"
    ],
    "answer": 3,
    "explanation": "A supervisor does not work directly on the product, so the salary is an indirect factory cost.",
    "optionFeedback": [
      "A supervisor does not work directly on the product, so the salary is not prime cost.",
      "It is not a cost of selling the goods.",
      "The supervisor works in the factory, not the office.",
      "Correct. A supervisor does not work directly on the product, so the salary is an indirect factory cost."
    ]
  },
  {
    "id": "o7707-5.4-06",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "medium",
    "question": "A manufacturer had raw materials of $3500 at the start of the year and $4200 at the end. Purchases of raw materials were $27 000 and returns outwards were $800. What was the cost of raw materials consumed?",
    "options": [
      "$25 500",
      "$26 300",
      "$26 900",
      "$27 000"
    ],
    "answer": 0,
    "explanation": "3500 + 27 000 minus 800 minus 4200 = $25 500.",
    "optionFeedback": [
      "Correct. 3500 + 27 000 minus 800 minus 4200 = $25 500.",
      "This forgets to deduct returns outwards.",
      "This reverses opening and closing inventory.",
      "This is the purchases figure only."
    ]
  },
  {
    "id": "o7707-5.4-07",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "Which cost is part of prime cost?",
    "options": [
      "Depreciation of factory machinery",
      "Direct materials",
      "Factory rent",
      "Factory supervisor's salary"
    ],
    "answer": 1,
    "explanation": "Prime cost = direct materials + direct labour + other direct expenses.",
    "optionFeedback": [
      "Depreciation is a factory overhead.",
      "Correct. Prime cost = direct materials + direct labour + other direct expenses.",
      "Factory rent is a factory overhead.",
      "A supervisor's salary is an indirect cost."
    ]
  },
  {
    "id": "o7707-5.4-08",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "Where is the cost of production transferred after the manufacturing account is completed?",
    "options": [
      "To the statement of financial position",
      "To the appropriation account",
      "To the cost of sales calculation in the statement of profit or loss",
      "To the capital account"
    ],
    "answer": 2,
    "explanation": "Cost of production takes the place of purchases in a trader's cost of sales.",
    "optionFeedback": [
      "It is a cost of goods made, used to find gross profit.",
      "Appropriation accounts are for partnerships.",
      "Correct. Cost of production takes the place of purchases in a trader's cost of sales.",
      "It is not owner's equity."
    ]
  },
  {
    "id": "o7707-5.4-09",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "hard",
    "question": "Opening inventory of finished goods was $8000 and closing inventory was $10 000. Cost of production was $120 000. What was the cost of sales?",
    "options": [
      "$118 000",
      "$120 000",
      "$122 000",
      "$138 000"
    ],
    "answer": 0,
    "explanation": "8000 + 120 000 minus 10 000 = $118 000.",
    "optionFeedback": [
      "Correct. 8000 + 120 000 minus 10 000 = $118 000.",
      "This is the cost of production. Finished goods inventory must be adjusted.",
      "This reverses opening and closing finished goods.",
      "This adds closing inventory instead of deducting it."
    ]
  },
  {
    "id": "o7707-5.4-10",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "hard",
    "question": "A manufacturer provided this information. What are its total factory overheads?",
    "options": [
      "$16 000",
      "$22 000",
      "$31 000",
      "$32 500"
    ],
    "answer": 1,
    "explanation": "14 000 + 2000 + 6000 = $22 000. Office salaries and carriage outwards are not factory costs.",
    "optionFeedback": [
      "This leaves out depreciation of factory plant.",
      "Correct. 14 000 + 2000 + 6000 = $22 000. Office salaries and carriage outwards are not factory costs.",
      "This includes office salaries, which go in the statement of profit or loss.",
      "This includes office salaries and carriage outwards."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "indirect factory wages",
          "14 000"
        ],
        [
          "factory insurance",
          "2 000"
        ],
        [
          "depreciation of factory plant",
          "6 000"
        ],
        [
          "office salaries",
          "9 000"
        ],
        [
          "carriage outwards",
          "1 500"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.4-11",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "What is a direct cost?",
    "options": [
      "A cost that stays the same whatever the output",
      "Any cost incurred in the factory",
      "A cost incurred in the office",
      "A cost that can be traced to each unit produced"
    ],
    "answer": 3,
    "explanation": "Direct materials and direct labour can be linked to each product made.",
    "optionFeedback": [
      "That describes a fixed cost.",
      "Some factory costs, such as rent, are indirect.",
      "Office costs are not production costs.",
      "Correct. Direct materials and direct labour can be linked to each product made."
    ]
  },
  {
    "id": "o7707-5.4-12",
    "level": "O Level 7707",
    "topic": "5.4",
    "topicTitle": "Manufacturing accounts",
    "difficulty": "easy",
    "question": "What is work in progress?",
    "options": [
      "Raw materials not yet used",
      "Completed goods not yet sold",
      "Goods returned by customers",
      "Goods that are partly made at the year end"
    ],
    "answer": 3,
    "explanation": "Work in progress is valued and adjusted in the manufacturing account.",
    "optionFeedback": [
      "These are inventory of raw materials.",
      "These are inventory of finished goods.",
      "Returns are not work in progress.",
      "Correct. Work in progress is valued and adjusted in the manufacturing account."
    ]
  },
  {
    "id": "o7707-5.5-01",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "hard",
    "question": "A club received subscriptions of $18 400 during the year. What is the subscriptions income for the year?",
    "options": [
      "$18 000",
      "$18 200",
      "$18 400",
      "$18 800"
    ],
    "answer": 0,
    "explanation": "18 400 minus 700 (arrears from last year) + 500 (paid last year for this year) + 900 (owing for this year) minus 1100 (paid for next year) = $18 000.",
    "optionFeedback": [
      "Correct. 18 400 minus 700 (arrears from last year) + 500 (paid last year for this year) + 900 (owing for this year) minus 1100 (paid for next year) = $18 000.",
      "This ignores the balances at the start of the year.",
      "This is the cash received. It must be adjusted for arrears and advance payments.",
      "This reverses all four adjustments."
    ],
    "table": {
      "headers": [
        "",
        "start of year $",
        "end of year $"
      ],
      "rows": [
        [
          "subscriptions in arrears",
          "700",
          "900"
        ],
        [
          "subscriptions in advance",
          "500",
          "1 100"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.5-02",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "hard",
    "question": "A society provided this information at the start of its financial year. What is the accumulated fund?",
    "options": [
      "$123 200",
      "$123 600",
      "$124 200",
      "$143 900"
    ],
    "answer": 1,
    "explanation": "Assets = 120 000 + 15 000 + 2000 + 6500 + 400 = 143 900. Liabilities = 300 + 20 000 = 20 300. Accumulated fund = 143 900 minus 20 300 = $123 600.",
    "optionFeedback": [
      "This leaves out subscriptions in arrears, which are an asset.",
      "Correct. Assets = 120 000 + 15 000 + 2000 + 6500 + 400 = 143 900. Liabilities = 300 + 20 000 = 20 300. Accumulated fund = 143 900 minus 20 300 = $123 600.",
      "This treats subscriptions in advance as an asset. They are a liability.",
      "This is total assets. Liabilities must be deducted."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "building",
          "120 000"
        ],
        [
          "equipment",
          "15 000"
        ],
        [
          "café inventory",
          "2 000"
        ],
        [
          "bank",
          "6 500"
        ],
        [
          "subscriptions in arrears",
          "400"
        ],
        [
          "subscriptions in advance",
          "300"
        ],
        [
          "loan from a member",
          "20 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.5-03",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "A sports club runs a café. Where is the profit from the café shown?",
    "options": [
      "As income in the income and expenditure account",
      "As an addition to the bank balance only",
      "In the accumulated fund at the start of the year",
      "As a receipt in the receipts and payments account"
    ],
    "answer": 0,
    "explanation": "A separate café trading statement works out the profit, which is then included as income in the income and expenditure account.",
    "optionFeedback": [
      "Correct. A separate café trading statement works out the profit, which is then included as income in the income and expenditure account.",
      "Profit is not the same as cash. It is shown as income for the year.",
      "The profit belongs to this year, not to the opening accumulated fund.",
      "The receipts and payments account shows cash taken, not the café's profit."
    ]
  },
  {
    "id": "o7707-5.5-04",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "What is a receipts and payments account?",
    "options": [
      "A statement of the accumulated fund",
      "A summary of the club's cash and bank transactions for the year",
      "A statement showing the club's surplus or deficit",
      "A list of the club's assets and liabilities"
    ],
    "answer": 1,
    "explanation": "It is a summary of the cash book, showing opening balance, receipts, payments and closing balance.",
    "optionFeedback": [
      "The accumulated fund is the club's equivalent of capital.",
      "Correct. It is a summary of the cash book, showing opening balance, receipts, payments and closing balance.",
      "A surplus or deficit is shown in the income and expenditure account.",
      "A list of assets and liabilities is a statement of financial position."
    ]
  },
  {
    "id": "o7707-5.5-05",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "medium",
    "question": "Which item appears in a club's income and expenditure account but not in its receipts and payments account?",
    "options": [
      "Depreciation of equipment",
      "Payment of the caretaker's wages",
      "Purchase of new equipment",
      "Subscriptions received in cash"
    ],
    "answer": 0,
    "explanation": "Depreciation is a non-cash expense, so it never appears in the receipts and payments account.",
    "optionFeedback": [
      "Correct. Depreciation is a non-cash expense, so it never appears in the receipts and payments account.",
      "Wages paid appear in both statements.",
      "Buying equipment is a cash payment, so it appears in the receipts and payments account.",
      "Subscriptions received in cash appear in the receipts and payments account."
    ]
  },
  {
    "id": "o7707-5.5-06",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "In a club's financial statements, what is a surplus?",
    "options": [
      "The accumulated fund",
      "The amount by which income exceeds expenditure",
      "The cash in the bank",
      "Profit paid out to members"
    ],
    "answer": 1,
    "explanation": "A surplus is the club's equivalent of a profit.",
    "optionFeedback": [
      "The surplus is added to the accumulated fund.",
      "Correct. A surplus is the club's equivalent of a profit.",
      "Cash is shown in the receipts and payments account.",
      "Clubs do not pay profits to members."
    ]
  },
  {
    "id": "o7707-5.5-07",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "How are subscriptions paid in advance at the year end shown in a club's statement of financial position?",
    "options": [
      "As a current liability",
      "As a current asset",
      "As income for the year",
      "As a non-current asset"
    ],
    "answer": 0,
    "explanation": "The club owes members a year's membership, so it is a liability.",
    "optionFeedback": [
      "Correct. The club owes members a year's membership, so it is a liability.",
      "Subscriptions in arrears are an asset, not those paid in advance.",
      "They belong to next year.",
      "They are not a long-term asset."
    ]
  },
  {
    "id": "o7707-5.5-08",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "medium",
    "question": "A club's income for the year was subscriptions $14 000, café profit $2500 and donations $1000. Its expenditure was wages $9000, depreciation $2000 and electricity $1800. What was the surplus?",
    "options": [
      "$2200",
      "$3700",
      "$4700",
      "$6700"
    ],
    "answer": 2,
    "explanation": "Income 17 500 minus expenditure 12 800 = $4700.",
    "optionFeedback": [
      "This leaves out the café profit.",
      "This leaves out the donations.",
      "Correct. Income 17 500 minus expenditure 12 800 = $4700.",
      "This leaves out depreciation."
    ]
  },
  {
    "id": "o7707-5.5-09",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "A club's accumulated fund was $85 000 at the start of the year. The surplus for the year was $4700. What is the accumulated fund at the end of the year?",
    "options": [
      "$4700",
      "$80 300",
      "$85 000",
      "$89 700"
    ],
    "answer": 3,
    "explanation": "85 000 + 4700 = $89 700.",
    "optionFeedback": [
      "This is the surplus only.",
      "This deducts the surplus instead of adding it.",
      "This forgets to add the surplus.",
      "Correct. 85 000 + 4700 = $89 700."
    ]
  },
  {
    "id": "o7707-5.5-10",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "medium",
    "question": "A club had $3000 in the bank at the start of the year. Receipts were $26 000 and payments were $27 500. What is the closing balance in its receipts and payments account?",
    "options": [
      "$56 500 in the bank",
      "$1500 in the bank",
      "$1500 overdrawn",
      "$4500 in the bank"
    ],
    "answer": 1,
    "explanation": "3000 + 26 000 minus 27 500 = $1500.",
    "optionFeedback": [
      "This adds everything together.",
      "Correct. 3000 + 26 000 minus 27 500 = $1500.",
      "Opening balance plus receipts is more than payments.",
      "This adds payments and deducts receipts."
    ]
  },
  {
    "id": "o7707-5.5-11",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "medium",
    "question": "Why is a receipts and payments account not enough to judge whether a club covers its running costs?",
    "options": [
      "It includes too much detail",
      "It ignores accruals, prepayments and depreciation",
      "It is prepared by members",
      "It shows only income"
    ],
    "answer": 1,
    "explanation": "Only the income and expenditure account shows the true surplus or deficit for the year.",
    "optionFeedback": [
      "Detail is not the problem.",
      "Correct. Only the income and expenditure account shows the true surplus or deficit for the year.",
      "Who prepares it is not the problem.",
      "It shows both receipts and payments."
    ]
  },
  {
    "id": "o7707-5.5-12",
    "level": "O Level 7707",
    "topic": "5.5",
    "topicTitle": "Clubs and societies",
    "difficulty": "easy",
    "question": "What is a club's equivalent of a sole trader's capital?",
    "options": [
      "The accumulated fund",
      "A current account",
      "Retained earnings",
      "Share capital"
    ],
    "answer": 0,
    "explanation": "The accumulated fund is the club's net assets: assets minus liabilities.",
    "optionFeedback": [
      "Correct. The accumulated fund is the club's net assets: assets minus liabilities.",
      "Current accounts are used by partners.",
      "Retained earnings belong to limited companies.",
      "Clubs do not issue shares."
    ]
  },
  {
    "id": "o7707-5.6-01",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "medium",
    "question": "A trader does not keep full records. What was the profit for the year?",
    "options": [
      "$3500",
      "$8500",
      "$13 500",
      "$21 500"
    ],
    "answer": 2,
    "explanation": "Profit = closing capital minus opening capital + drawings minus capital introduced = 38 500 minus 30 000 + 9000 minus 4000 = $13 500.",
    "optionFeedback": [
      "This deducts drawings and adds capital introduced, the reverse of what is needed.",
      "This is only the change in capital. Drawings and capital introduced must be adjusted.",
      "Correct. Profit = closing capital minus opening capital + drawings minus capital introduced = 38 500 minus 30 000 + 9000 minus 4000 = $13 500.",
      "This adds the capital introduced instead of deducting it."
    ],
    "table": {
      "headers": [
        "item",
        "$"
      ],
      "rows": [
        [
          "capital at start of year",
          "30 000"
        ],
        [
          "capital at end of year",
          "38 500"
        ],
        [
          "drawings during the year",
          "9 000"
        ],
        [
          "additional capital introduced",
          "4 000"
        ]
      ]
    }
  },
  {
    "id": "o7707-5.6-02",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "medium",
    "question": "Cost of sales was $60 000 and the trader uses a mark-up of 25%. What was the revenue?",
    "options": [
      "$15 000",
      "$45 000",
      "$75 000",
      "$80 000"
    ],
    "answer": 2,
    "explanation": "Mark-up is based on cost: 60 000 + 25% of 60 000 = $75 000.",
    "optionFeedback": [
      "This is the gross profit, not the revenue.",
      "This deducts 25% instead of adding it.",
      "Correct. Mark-up is based on cost: 60 000 + 25% of 60 000 = $75 000.",
      "This treats 25% as a margin on selling price. Mark-up is based on cost."
    ]
  },
  {
    "id": "o7707-5.6-03",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "Revenue was $90 000 with a gross margin of 30%. Opening inventory was $7000 and closing inventory was $9000. What were the purchases?",
    "options": [
      "$61 000",
      "$63 000",
      "$65 000",
      "$79 000"
    ],
    "answer": 2,
    "explanation": "Gross profit = 30% of 90 000 = 27 000, so cost of sales = 63 000. Purchases = cost of sales minus opening inventory + closing inventory = 63 000 minus 7000 + 9000 = $65 000.",
    "optionFeedback": [
      "This reverses the inventory adjustment.",
      "This is cost of sales, not purchases.",
      "Correct. Gross profit = 30% of 90 000 = 27 000, so cost of sales = 63 000. Purchases = cost of sales minus opening inventory + closing inventory = 63 000 minus 7000 + 9000 = $65 000.",
      "This adds both opening and closing inventory."
    ]
  },
  {
    "id": "o7707-5.6-04",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "Trade receivables were $5500 at the start of the year and $7200 at the end. Receipts from customers were $41 000 and discounts allowed were $800. What were the credit sales?",
    "options": [
      "$40 100",
      "$41 900",
      "$42 700",
      "$43 500"
    ],
    "answer": 3,
    "explanation": "Credit sales = closing receivables + receipts + discounts allowed minus opening receivables = 7200 + 41 000 + 800 minus 5500 = $43 500.",
    "optionFeedback": [
      "This reverses the opening and closing receivables.",
      "This deducts discounts allowed instead of adding them.",
      "This forgets discounts allowed.",
      "Correct. Credit sales = closing receivables + receipts + discounts allowed minus opening receivables = 7200 + 41 000 + 800 minus 5500 = $43 500."
    ]
  },
  {
    "id": "o7707-5.6-05",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "Average inventory was $12 000 and the rate of inventory turnover was 6 times. The gross margin was 20%. What was the revenue?",
    "options": [
      "$14 400",
      "$72 000",
      "$86 400",
      "$90 000"
    ],
    "answer": 3,
    "explanation": "Cost of sales = 12 000 x 6 = 72 000. Cost of sales is 80% of revenue, so revenue = 72 000 divided by 0.8 = $90 000.",
    "optionFeedback": [
      "This is the gross profit, not the revenue.",
      "This is cost of sales.",
      "This treats 20% as a mark-up on cost instead of a margin on revenue.",
      "Correct. Cost of sales = 12 000 x 6 = 72 000. Cost of sales is 80% of revenue, so revenue = 72 000 divided by 0.8 = $90 000."
    ]
  },
  {
    "id": "o7707-5.6-06",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "easy",
    "question": "What is a statement of affairs?",
    "options": [
      "A statement of profit or loss for a business with incomplete records",
      "A statement of changes in equity",
      "A list of assets and liabilities used to calculate capital",
      "A summary of cash received and paid"
    ],
    "answer": 2,
    "explanation": "A statement of affairs works out capital as assets minus liabilities at a date, when full records are not kept.",
    "optionFeedback": [
      "A statement of profit or loss shows income and expenses for a period.",
      "A statement of changes in equity is prepared by limited companies.",
      "Correct. A statement of affairs works out capital as assets minus liabilities at a date, when full records are not kept.",
      "A summary of cash received and paid is a receipts and payments account."
    ]
  },
  {
    "id": "o7707-5.6-07",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "medium",
    "question": "A trader uses a mark-up of 25%. What is her gross margin?",
    "options": [
      "20%",
      "25%",
      "33.3%",
      "75%"
    ],
    "answer": 0,
    "explanation": "Cost 100, profit 25, selling price 125. Margin = 25 / 125 x 100 = 20%.",
    "optionFeedback": [
      "Correct. Cost 100, profit 25, selling price 125. Margin = 25 / 125 x 100 = 20%.",
      "Mark-up and margin are different percentages.",
      "This turns the calculation the wrong way round.",
      "This is cost of sales as a percentage of revenue for a 25% margin."
    ]
  },
  {
    "id": "o7707-5.6-08",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "A trader keeps only a cash record. Opening cash was $400 and closing cash was $600. Cash takings were $52 000. Cash paid to suppliers was $30 000 and cash expenses were $12 000. The rest was taken as drawings. How much were the drawings?",
    "options": [
      "$9400",
      "$9800",
      "$10 400",
      "$11 000"
    ],
    "answer": 1,
    "explanation": "400 + 52 000 minus 30 000 minus 12 000 minus 600 = $9800.",
    "optionFeedback": [
      "This forgets the opening cash.",
      "Correct. 400 + 52 000 minus 30 000 minus 12 000 minus 600 = $9800.",
      "This forgets the closing cash.",
      "This adds the closing cash instead of deducting it."
    ]
  },
  {
    "id": "o7707-5.6-09",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "Trade payables were $4000 at the start of the year and $5200 at the end. Payments to suppliers were $36 000 and discounts received were $300. What were the credit purchases?",
    "options": [
      "$35 100",
      "$36 900",
      "$37 200",
      "$37 500"
    ],
    "answer": 3,
    "explanation": "5200 + 36 000 + 300 minus 4000 = $37 500.",
    "optionFeedback": [
      "This reverses the opening and closing payables.",
      "This deducts discounts received instead of adding them.",
      "This forgets discounts received.",
      "Correct. 5200 + 36 000 + 300 minus 4000 = $37 500."
    ]
  },
  {
    "id": "o7707-5.6-10",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "easy",
    "question": "A trader's assets are $46 000 and liabilities are $13 500. What is his capital?",
    "options": [
      "$13 500",
      "$32 500",
      "$46 000",
      "$59 500"
    ],
    "answer": 1,
    "explanation": "A statement of affairs gives capital = assets minus liabilities = $32 500.",
    "optionFeedback": [
      "This is the liabilities.",
      "Correct. A statement of affairs gives capital = assets minus liabilities = $32 500.",
      "This is the assets.",
      "This adds liabilities instead of deducting them."
    ]
  },
  {
    "id": "o7707-5.6-11",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "hard",
    "question": "A trader banked cash takings of $15 000 after paying wages of $3000 in cash out of the takings. Credit sales for the year were $42 000. What was the total revenue?",
    "options": [
      "$42 000",
      "$54 000",
      "$57 000",
      "$60 000"
    ],
    "answer": 3,
    "explanation": "Cash sales = 15 000 + 3000 = 18 000. Revenue = 18 000 + 42 000 = $60 000.",
    "optionFeedback": [
      "This is credit sales only.",
      "This deducts the wages instead of adding them back.",
      "This forgets the wages paid out of takings.",
      "Correct. Cash sales = 15 000 + 3000 = 18 000. Revenue = 18 000 + 42 000 = $60 000."
    ]
  },
  {
    "id": "o7707-5.6-12",
    "level": "O Level 7707",
    "topic": "5.6",
    "topicTitle": "Incomplete records",
    "difficulty": "easy",
    "question": "What is a disadvantage of not keeping a full set of accounting records?",
    "options": [
      "Profit can never be calculated",
      "It is illegal for every business",
      "It is harder to find errors and to know the exact profit",
      "The business cannot sell on credit"
    ],
    "answer": 2,
    "explanation": "Without double entry there is no trial balance check and less detail for decisions.",
    "optionFeedback": [
      "Profit can be estimated from changes in capital.",
      "Many small traders keep incomplete records.",
      "Correct. Without double entry there is no trial balance check and less detail for decisions.",
      "Credit sales are still possible."
    ]
  },
  {
    "id": "o7707-6.1-01",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "A business has inventory $14 000, trade receivables $9000, bank $2000 and trade payables $10 000. What is its current ratio?",
    "options": [
      "0.4 : 1",
      "1.1 : 1",
      "2.3 : 1",
      "2.5 : 1"
    ],
    "answer": 3,
    "explanation": "Current assets = 14 000 + 9000 + 2000 = 25 000. Current liabilities = 10 000. Current ratio = 25 000 : 10 000 = 2.5 : 1.",
    "optionFeedback": [
      "This divides current liabilities by current assets, the wrong way up.",
      "This is the liquid ratio, which leaves out inventory.",
      "This leaves out the bank balance.",
      "Correct. Current assets = 14 000 + 9000 + 2000 = 25 000. Current liabilities = 10 000. Current ratio = 25 000 : 10 000 = 2.5 : 1."
    ]
  },
  {
    "id": "o7707-6.1-02",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "Using the same business (inventory $14 000, trade receivables $9000, bank $2000, trade payables $10 000), what is its liquid (acid test) ratio?",
    "options": [
      "0.9 : 1",
      "1.1 : 1",
      "1.4 : 1",
      "2.5 : 1"
    ],
    "answer": 1,
    "explanation": "Liquid assets exclude inventory: 9000 + 2000 = 11 000. 11 000 : 10 000 = 1.1 : 1.",
    "optionFeedback": [
      "This leaves out the bank balance.",
      "Correct. Liquid assets exclude inventory: 9000 + 2000 = 11 000. 11 000 : 10 000 = 1.1 : 1.",
      "This uses inventory, which must be excluded from liquid assets.",
      "This is the current ratio, which includes inventory."
    ]
  },
  {
    "id": "o7707-6.1-03",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "Revenue was $80 000 and gross profit was $22 000. What was the gross margin?",
    "options": [
      "27.5%",
      "37.9%",
      "72.5%",
      "137.9%"
    ],
    "answer": 0,
    "explanation": "Gross margin = gross profit divided by revenue x 100 = 22 000 / 80 000 x 100 = 27.5%. 37.9% is the mark-up.",
    "optionFeedback": [
      "Correct. Gross margin = gross profit divided by revenue x 100 = 22 000 / 80 000 x 100 = 27.5%. 37.9% is the mark-up.",
      "This is the mark-up, gross profit as a percentage of cost of sales.",
      "This is cost of sales as a percentage of revenue.",
      "This divides revenue by cost of sales."
    ]
  },
  {
    "id": "o7707-6.1-04",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "Credit sales for the year were $73 000 and trade receivables at the year end were $6000. What is the trade receivables turnover in days (use 365 days)?",
    "options": [
      "8 days",
      "12 days",
      "30 days",
      "365 days"
    ],
    "answer": 2,
    "explanation": "6000 / 73 000 x 365 = 30 days.",
    "optionFeedback": [
      "This multiplies by 100 instead of 365.",
      "This is credit sales divided by receivables, a number of times, not days.",
      "Correct. 6000 / 73 000 x 365 = 30 days.",
      "This is the number of days in the year, not the collection period."
    ]
  },
  {
    "id": "o7707-6.1-05",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "hard",
    "question": "A business has non-current assets $90 000, current assets $30 000 and current liabilities $20 000. Profit for the year was $15 000. What is the return on capital employed?",
    "options": [
      "12.5%",
      "15.0%",
      "16.7%",
      "21.4%"
    ],
    "answer": 1,
    "explanation": "Capital employed = 90 000 + 30 000 minus 20 000 = 100 000. ROCE = 15 000 / 100 000 x 100 = 15.0%.",
    "optionFeedback": [
      "This divides by total assets instead of capital employed.",
      "Correct. Capital employed = 90 000 + 30 000 minus 20 000 = 100 000. ROCE = 15 000 / 100 000 x 100 = 15.0%.",
      "This uses non-current assets only.",
      "This deducts current liabilities from non-current assets and ignores current assets."
    ]
  },
  {
    "id": "o7707-6.1-06",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "easy",
    "question": "Revenue was $120 000 and profit for the year was $9000. What is the profit margin?",
    "options": [
      "0.075%",
      "7.5%",
      "13.3%",
      "92.5%"
    ],
    "answer": 1,
    "explanation": "Profit margin = profit for the year / revenue x 100 = 9000 / 120 000 x 100 = 7.5%.",
    "optionFeedback": [
      "This is the decimal, not multiplied by 100.",
      "Correct. Profit margin = profit for the year / revenue x 100 = 9000 / 120 000 x 100 = 7.5%.",
      "This divides revenue by profit, the wrong way up.",
      "This is expenses as a percentage of revenue."
    ]
  },
  {
    "id": "o7707-6.1-07",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "A trader's gross profit was $15 000 and cost of sales was $60 000. What was the mark-up?",
    "options": [
      "20%",
      "25%",
      "80%",
      "400%"
    ],
    "answer": 1,
    "explanation": "Mark-up = gross profit / cost of sales x 100 = 15 000 / 60 000 x 100 = 25%.",
    "optionFeedback": [
      "This is the gross margin, gross profit divided by revenue.",
      "Correct. Mark-up = gross profit / cost of sales x 100 = 15 000 / 60 000 x 100 = 25%.",
      "This is cost of sales as a percentage of revenue.",
      "This divides cost of sales by gross profit, the wrong way up."
    ]
  },
  {
    "id": "o7707-6.1-08",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "Credit purchases for the year were $54 750 and trade payables at the year end were $4500. What is the trade payables turnover in days (use 365 days)?",
    "options": [
      "8 days",
      "12 days",
      "30 days",
      "365 days"
    ],
    "answer": 2,
    "explanation": "4500 / 54 750 x 365 = 30 days.",
    "optionFeedback": [
      "This multiplies by 100 instead of 365.",
      "This is credit purchases divided by payables, a number of times, not days.",
      "Correct. 4500 / 54 750 x 365 = 30 days.",
      "This is the number of days in the year, not the payment period."
    ]
  },
  {
    "id": "o7707-6.1-09",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "hard",
    "question": "Cost of sales was $48 000. Inventory was $5000 at the start of the year and $7000 at the end. How many times did inventory turn over during the year?",
    "options": [
      "6.9 times",
      "4 times",
      "9.6 times",
      "8 times"
    ],
    "answer": 3,
    "explanation": "Average inventory = (5000 + 7000) / 2 = 6000. Turnover = 48 000 / 6000 = 8 times.",
    "optionFeedback": [
      "This uses closing inventory instead of average inventory.",
      "This divides by the total of opening and closing inventory instead of the average.",
      "This uses opening inventory instead of average inventory.",
      "Correct. Average inventory = (5000 + 7000) / 2 = 6000. Turnover = 48 000 / 6000 = 8 times."
    ]
  },
  {
    "id": "o7707-6.1-10",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "A business has current assets of $31 000, including inventory of $13 000. Current liabilities are $15 000. What is its liquid (acid test) ratio?",
    "options": [
      "0.8 : 1",
      "0.9 : 1",
      "1.2 : 1",
      "2.1 : 1"
    ],
    "answer": 2,
    "explanation": "Liquid assets = 31 000 minus 13 000 = 18 000. 18 000 : 15 000 = 1.2 : 1.",
    "optionFeedback": [
      "This divides current liabilities by liquid assets, the wrong way up.",
      "This divides inventory by current liabilities.",
      "Correct. Liquid assets = 31 000 minus 13 000 = 18 000. 18 000 : 15 000 = 1.2 : 1.",
      "This is the current ratio, which includes inventory."
    ]
  },
  {
    "id": "o7707-6.1-11",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "hard",
    "question": "A trader's capital is $70 000 and she has a long-term loan of $30 000. Profit for the year was $12 000. What is the return on capital employed?",
    "options": [
      "12.0%",
      "17.1%",
      "40.0%",
      "833%"
    ],
    "answer": 0,
    "explanation": "Capital employed = 70 000 + 30 000 = 100 000. ROCE = 12 000 / 100 000 x 100 = 12.0%.",
    "optionFeedback": [
      "Correct. Capital employed = 70 000 + 30 000 = 100 000. ROCE = 12 000 / 100 000 x 100 = 12.0%.",
      "This uses the owner's capital only. Capital employed includes the long-term loan.",
      "This divides profit by the loan only.",
      "This divides capital employed by profit, the wrong way up."
    ]
  },
  {
    "id": "o7707-6.1-12",
    "level": "O Level 7707",
    "topic": "6.1",
    "topicTitle": "Calculation and understanding of accounting ratios",
    "difficulty": "medium",
    "question": "Revenue was $50 000, gross profit was $20 000 and expenses were $14 000. What was the profit margin?",
    "options": [
      "12%",
      "28%",
      "30%",
      "40%"
    ],
    "answer": 0,
    "explanation": "Profit = 20 000 minus 14 000 = 6000. Profit margin = 6000 / 50 000 x 100 = 12%.",
    "optionFeedback": [
      "Correct. Profit = 20 000 minus 14 000 = 6000. Profit margin = 6000 / 50 000 x 100 = 12%.",
      "This is expenses as a percentage of revenue.",
      "This is profit as a percentage of gross profit.",
      "This is the gross margin."
    ]
  },
  {
    "id": "o7707-6.2-01",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "easy",
    "question": "A trader's current ratio fell from 2 : 1 to 0.9 : 1. What does this suggest?",
    "options": [
      "The business may have difficulty paying its short-term debts",
      "Customers are paying more quickly",
      "The business is holding too much cash",
      "The business has become more profitable"
    ],
    "answer": 0,
    "explanation": "A current ratio below 1 : 1 means current liabilities exceed current assets, a warning sign for liquidity.",
    "optionFeedback": [
      "Correct. A current ratio below 1 : 1 means current liabilities exceed current assets, a warning sign for liquidity.",
      "Faster-paying customers would usually improve liquidity, not explain a fall below 1 : 1.",
      "A falling current ratio means less liquidity, not too much cash.",
      "The current ratio measures liquidity, not profit."
    ]
  },
  {
    "id": "o7707-6.2-02",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "A business allows customers 30 days' credit. Its trade receivables turnover rose from 30 days to 55 days. What should the business do?",
    "options": [
      "Tighten credit control and chase overdue customers",
      "Buy more inventory on credit",
      "Reduce its selling prices",
      "Allow customers longer credit"
    ],
    "answer": 0,
    "explanation": "Customers are taking far longer than the terms allow, which ties up cash. Better credit control would bring the days back down.",
    "optionFeedback": [
      "Correct. Customers are taking far longer than the terms allow, which ties up cash. Better credit control would bring the days back down.",
      "Buying more inventory does nothing to collect money from customers.",
      "Lower prices affect margins, not how quickly customers pay.",
      "Longer credit would make the problem worse."
    ]
  },
  {
    "id": "o7707-6.2-03",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "hard",
    "question": "A business made a good profit for the year, but its bank overdraft increased. Which reason could explain this?",
    "options": [
      "It bought new equipment and paid in cash",
      "It recorded accrued expenses at the year end",
      "It charged more depreciation",
      "It increased its allowance for irrecoverable debts"
    ],
    "answer": 0,
    "explanation": "Buying a non-current asset uses cash but is not an expense, so cash can fall while profit is high. The other items affect profit without any cash movement.",
    "optionFeedback": [
      "Correct. Buying a non-current asset uses cash but is not an expense, so cash can fall while profit is high. The other items affect profit without any cash movement.",
      "Accrued expenses reduce profit but involve no cash at the year end.",
      "Depreciation reduces profit but involves no cash.",
      "An allowance for irrecoverable debts reduces profit but involves no cash."
    ]
  },
  {
    "id": "o7707-6.2-04",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "A trader's gross margin fell from 30% to 24%. Which reason could explain this?",
    "options": [
      "The trader's rent increased",
      "Suppliers raised their prices and the trader did not raise selling prices",
      "The trader took more drawings",
      "The trader sold a larger quantity of goods"
    ],
    "answer": 1,
    "explanation": "Gross margin falls when cost of sales rises faster than revenue. Rent and drawings do not affect gross profit, and selling more at the same margin does not change the percentage.",
    "optionFeedback": [
      "Rent is an expense below gross profit.",
      "Correct. Gross margin falls when cost of sales rises faster than revenue. Rent and drawings do not affect gross profit, and selling more at the same margin does not change the percentage.",
      "Drawings are not an expense.",
      "Selling more at the same margin does not change the percentage."
    ]
  },
  {
    "id": "o7707-6.2-05",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "hard",
    "question": "Which action would improve a trader's liquid (acid test) ratio?",
    "options": [
      "Taking more cash drawings",
      "The owner introduces additional capital in cash",
      "Repaying a long-term loan in cash",
      "Buying more inventory on credit"
    ],
    "answer": 1,
    "explanation": "Extra cash raises liquid assets without increasing current liabilities. Buying inventory on credit adds a current liability with no liquid asset, and the other two reduce cash.",
    "optionFeedback": [
      "Drawings reduce cash, so the ratio falls.",
      "Correct. Extra cash raises liquid assets without increasing current liabilities. Buying inventory on credit adds a current liability with no liquid asset, and the other two reduce cash.",
      "Repaying a loan in cash reduces liquid assets.",
      "Buying on credit adds a current liability without any liquid asset, so the ratio falls."
    ]
  },
  {
    "id": "o7707-6.2-06",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "easy",
    "question": "A business's trade receivables turnover fell from 50 days to 35 days. What does this mean?",
    "options": [
      "Credit control has become weaker",
      "Sales have increased",
      "The business is paying its suppliers more quickly",
      "Customers are paying more quickly"
    ],
    "answer": 3,
    "explanation": "Fewer days means money is collected sooner, which helps the bank balance.",
    "optionFeedback": [
      "Faster payment shows stronger credit control.",
      "The ratio measures speed of payment, not the amount of sales.",
      "That is shown by trade payables turnover.",
      "Correct. Fewer days means money is collected sooner, which helps the bank balance."
    ]
  },
  {
    "id": "o7707-6.2-07",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "Suppliers allow a business 30 days' credit. Its trade payables turnover has risen from 30 days to 60 days. What is the main risk?",
    "options": [
      "There is no risk because the business keeps cash longer",
      "The business is paying its suppliers too quickly",
      "Relationships with suppliers will improve",
      "Suppliers may refuse further credit"
    ],
    "answer": 3,
    "explanation": "Paying twice as slowly as agreed may lead suppliers to stop supplying on credit.",
    "optionFeedback": [
      "Paying well beyond the terms can lose supplier goodwill and credit.",
      "60 days is slower, not quicker.",
      "Paying late usually damages relationships.",
      "Correct. Paying twice as slowly as agreed may lead suppliers to stop supplying on credit."
    ]
  },
  {
    "id": "o7707-6.2-08",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "A trader's rate of inventory turnover fell from 10 times to 6 times a year. What does this suggest?",
    "options": [
      "The ratio has no meaning for a trader",
      "Inventory is selling more quickly",
      "Inventory is selling more slowly, so some may become out of date",
      "Selling prices have increased"
    ],
    "answer": 2,
    "explanation": "Goods are held longer, which ties up cash and increases the risk of damage or obsolescence.",
    "optionFeedback": [
      "It is an important efficiency ratio for traders.",
      "A lower turnover means goods stay longer before being sold.",
      "Correct. Goods are held longer, which ties up cash and increases the risk of damage or obsolescence.",
      "Inventory turnover measures speed, not price."
    ]
  },
  {
    "id": "o7707-6.2-09",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "hard",
    "question": "A trader's gross margin stayed the same but her profit margin fell. What is the most likely reason?",
    "options": [
      "Her selling prices fell",
      "Her expenses increased compared with revenue",
      "She sold more goods at the same prices",
      "Her suppliers raised their prices"
    ],
    "answer": 1,
    "explanation": "If gross profit is the same proportion of revenue but profit is not, the difference must be in the expenses.",
    "optionFeedback": [
      "That would reduce the gross margin as well.",
      "Correct. If gross profit is the same proportion of revenue but profit is not, the difference must be in the expenses.",
      "That would not reduce either margin by itself.",
      "That would reduce the gross margin as well."
    ]
  },
  {
    "id": "o7707-6.2-10",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "hard",
    "question": "A business made a loss for the year, but its bank balance increased. Which reason could explain this?",
    "options": [
      "It wrote off an irrecoverable debt",
      "It recorded an accrued expense",
      "It charged depreciation",
      "It received a large bank loan"
    ],
    "answer": 3,
    "explanation": "A loan brings cash in but is not income, so cash can rise while the business makes a loss.",
    "optionFeedback": [
      "Writing off a debt involves no cash.",
      "An accrual involves no cash at the year end.",
      "Depreciation reduces profit but does not affect the bank.",
      "Correct. A loan brings cash in but is not income, so cash can rise while the business makes a loss."
    ]
  },
  {
    "id": "o7707-6.2-11",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "Which action would increase a trader's working capital?",
    "options": [
      "Repaying a long-term loan in cash",
      "Buying a new machine for cash",
      "Selling an unused machine for cash",
      "Taking cash drawings"
    ],
    "answer": 2,
    "explanation": "Cash (a current asset) increases, while a non-current asset is given up.",
    "optionFeedback": [
      "Cash falls and no current liability is reduced.",
      "Cash falls and no current asset replaces it.",
      "Correct. Cash (a current asset) increases, while a non-current asset is given up.",
      "Cash falls, so working capital falls."
    ]
  },
  {
    "id": "o7707-6.2-12",
    "level": "O Level 7707",
    "topic": "6.2",
    "topicTitle": "Interpretation of accounting ratios",
    "difficulty": "medium",
    "question": "A trader's current ratio is 6 : 1, while similar businesses have about 2 : 1. What might this suggest?",
    "options": [
      "The business cannot pay its debts",
      "Too much money may be tied up in inventory or idle cash",
      "The business has borrowed too much long-term",
      "The business is very profitable"
    ],
    "answer": 1,
    "explanation": "A very high current ratio can mean resources are not being used efficiently.",
    "optionFeedback": [
      "A ratio of 6 : 1 shows plenty of current assets.",
      "Correct. A very high current ratio can mean resources are not being used efficiently.",
      "Long-term borrowing is not part of the current ratio.",
      "The current ratio measures liquidity, not profit."
    ]
  },
  {
    "id": "o7707-6.3-01",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "medium",
    "question": "Laila wants to compare her business's ratios with those of a similar business. What could make the comparison misleading?",
    "options": [
      "Both businesses calculate ratios with the same formulas",
      "One business uses straight-line depreciation and the other uses reducing balance",
      "The businesses are in the same industry",
      "Both businesses prepare accounts for a 12-month period"
    ],
    "answer": 1,
    "explanation": "Different accounting policies, such as depreciation methods, change profit and asset values, so ratios are not directly comparable.",
    "optionFeedback": [
      "Using the same formulas helps comparison.",
      "Correct. Different accounting policies, such as depreciation methods, change profit and asset values, so ratios are not directly comparable.",
      "Being in the same industry makes comparison more useful, not less.",
      "Using the same length of period helps comparison."
    ]
  },
  {
    "id": "o7707-6.3-02",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "hard",
    "question": "Two shops sell similar goods. One has its year end just before its busiest season and the other just after. Why might this make comparison difficult?",
    "options": [
      "The shops will have different owners",
      "The shops will pay different rates of tax",
      "The shops will use different currencies",
      "Inventory and receivables at the year end will be very different because of the timing"
    ],
    "answer": 3,
    "explanation": "A year end before the busy season usually means high inventory; after it, high receivables and cash. Year-end balances then differ for reasons of timing, not performance.",
    "optionFeedback": [
      "Who owns the shops does not explain differences caused by the timing of the year end.",
      "Tax rates do not change the year-end inventory and receivables.",
      "The question is about timing, not currency.",
      "Correct. A year end before the busy season usually means high inventory; after it, high receivables and cash. Year-end balances then differ for reasons of timing, not performance."
    ]
  },
  {
    "id": "o7707-6.3-03",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "easy",
    "question": "Why might a trader compare his ratios with those of other businesses in the same trade?",
    "options": [
      "To find out the other businesses' customers",
      "To check the accuracy of his trial balance",
      "To calculate his own profit for the year",
      "To judge whether his performance is good compared with similar businesses"
    ],
    "answer": 3,
    "explanation": "Comparison with similar businesses shows whether a ratio is strong or weak for that type of business.",
    "optionFeedback": [
      "Ratios do not reveal other businesses' customers.",
      "Comparing with other businesses does not check his trial balance.",
      "His own profit comes from his own financial statements.",
      "Correct. Comparison with similar businesses shows whether a ratio is strong or weak for that type of business."
    ]
  },
  {
    "id": "o7707-6.3-04",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "easy",
    "question": "A grocery shop owner wants to compare her results with another business. Which comparison is most useful?",
    "options": [
      "A large supermarket chain listed on a stock exchange",
      "A sports club",
      "A car dealership",
      "A grocery shop of similar size in a similar area"
    ],
    "answer": 3,
    "explanation": "Comparisons are most meaningful between businesses of the same type and similar size.",
    "optionFeedback": [
      "A large supermarket chain is very different in size.",
      "A sports club is a not-for-profit organisation.",
      "A car dealership is a different type of business.",
      "Correct. Comparisons are most meaningful between businesses of the same type and similar size."
    ]
  },
  {
    "id": "o7707-6.3-05",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "medium",
    "question": "Business X rents its shop. Business Y, which is otherwise similar, owns its shop. How does this affect a comparison of their profit margins?",
    "options": [
      "There is no effect because premises are a non-current asset",
      "Business X's profit margin will be lower because of the rent expense, not because it trades less well",
      "Business X's gross margin will be lower",
      "Business Y's profit margin will be lower because owning premises is an expense"
    ],
    "answer": 1,
    "explanation": "Rent is an expense in X's statement of profit or loss, while Y has no rent. The difference comes from how premises are financed, not from trading.",
    "optionFeedback": [
      "Rent is an expense, so it does affect profit.",
      "Correct. Rent is an expense in X's statement of profit or loss, while Y has no rent. The difference comes from how premises are financed, not from trading.",
      "Rent is deducted after gross profit, so gross margin is not affected.",
      "Business Y pays no rent, so its expenses are lower, not higher."
    ]
  },
  {
    "id": "o7707-6.3-06",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "easy",
    "question": "Why are ratios more useful than actual figures when comparing a small shop with a large one?",
    "options": [
      "Actual figures are always wrong",
      "Ratios show figures in proportion, so businesses of different sizes can be compared",
      "Ratios remove every difference between businesses",
      "Ratios show the cash each business holds"
    ],
    "answer": 1,
    "explanation": "A large shop will have larger profits; ratios show whether it is relatively more profitable.",
    "optionFeedback": [
      "Actual figures are accurate but hard to compare across sizes.",
      "Correct. A large shop will have larger profits; ratios show whether it is relatively more profitable.",
      "Differences in policies and circumstances remain.",
      "Ratios show relationships between figures, not cash held."
    ]
  },
  {
    "id": "o7707-6.3-07",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "medium",
    "question": "Shop A sells only for cash. Shop B allows customers 60 days' credit. Which ratio comparison between the two shops is least meaningful?",
    "options": [
      "Profit margin",
      "Gross margin",
      "Inventory turnover",
      "Trade receivables turnover"
    ],
    "answer": 3,
    "explanation": "Shop A has almost no trade receivables, so its receivables turnover tells you nothing useful.",
    "optionFeedback": [
      "Profit margin can still be compared.",
      "Gross margin can still be compared, as it depends on prices and costs.",
      "Inventory turnover can still be compared.",
      "Correct. Shop A has almost no trade receivables, so its receivables turnover tells you nothing useful."
    ]
  },
  {
    "id": "o7707-6.3-08",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "hard",
    "question": "Owner X works in her business unpaid. Owner Y employs a manager for $30 000 a year. Both businesses are otherwise similar. How does this affect a comparison of their profit margins?",
    "options": [
      "Business X's profit margin looks better because the value of the owner's work is not recorded as an expense",
      "Only the gross margins are affected",
      "There is no effect because salaries are not expenses",
      "Business Y's profit margin looks better because it employs a manager"
    ],
    "answer": 0,
    "explanation": "X has no salary cost for her own work, so the margins differ for reasons other than trading.",
    "optionFeedback": [
      "Correct. X has no salary cost for her own work, so the margins differ for reasons other than trading.",
      "Salaries are below gross profit, so gross margin is not affected.",
      "Employees' salaries are expenses.",
      "The manager's salary is an expense, which lowers Y's profit."
    ]
  },
  {
    "id": "o7707-6.3-09",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "medium",
    "question": "Why should a trader compare her results with a similar business for the same year rather than ten years ago?",
    "options": [
      "Ratios cannot be calculated from old accounts",
      "Prices and business conditions change over time",
      "Accounting equations were different ten years ago",
      "Older accounts are always incorrect"
    ],
    "answer": 1,
    "explanation": "Inflation and changes in markets make comparisons across many years misleading.",
    "optionFeedback": [
      "They can be calculated.",
      "Correct. Inflation and changes in markets make comparisons across many years misleading.",
      "The accounting equation has not changed.",
      "Older accounts may be correct but reflect different conditions."
    ]
  },
  {
    "id": "o7707-6.3-10",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "hard",
    "question": "Two similar businesses have the same profit before depreciation. One uses old equipment that is almost fully depreciated; the other has just bought new equipment. Why might the first business show a higher return on capital employed?",
    "options": [
      "Return on capital employed ignores assets",
      "Old equipment increases revenue",
      "Old equipment is always more efficient",
      "Its depreciation charge and asset values are lower"
    ],
    "answer": 3,
    "explanation": "Lower depreciation increases profit, and lower net book values reduce capital employed, so the ratio rises.",
    "optionFeedback": [
      "Capital employed is based on net assets.",
      "Age of equipment does not increase revenue.",
      "Age does not make equipment more efficient.",
      "Correct. Lower depreciation increases profit, and lower net book values reduce capital employed, so the ratio rises."
    ]
  },
  {
    "id": "o7707-6.3-11",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "easy",
    "question": "What is an industry average ratio useful for?",
    "options": [
      "To prove that the trial balance agrees",
      "As a benchmark to judge a business's own ratios",
      "To replace the business's own accounts",
      "To calculate the business's profit"
    ],
    "answer": 1,
    "explanation": "Comparing with an industry average shows whether a ratio is strong or weak for that trade.",
    "optionFeedback": [
      "It has nothing to do with the trial balance.",
      "Correct. Comparing with an industry average shows whether a ratio is strong or weak for that trade.",
      "It does not replace the business's records.",
      "Profit comes from the business's own statements."
    ]
  },
  {
    "id": "o7707-6.3-12",
    "level": "O Level 7707",
    "topic": "6.3",
    "topicTitle": "Inter-business comparison",
    "difficulty": "medium",
    "question": "A trader wants to compare her results with a competitor that is also a sole trader. What practical problem is she likely to face?",
    "options": [
      "Sole traders do not make profits",
      "The competitor's accounts are not published, so the information may not be available",
      "Sole traders do not own assets",
      "Ratios cannot be calculated for sole traders"
    ],
    "answer": 1,
    "explanation": "Only companies have to publish accounts, so a sole trader's figures are usually private.",
    "optionFeedback": [
      "Sole traders can make profits.",
      "Correct. Only companies have to publish accounts, so a sole trader's figures are usually private.",
      "Sole traders own assets.",
      "Ratios can be calculated for any business with accounts."
    ]
  },
  {
    "id": "o7707-6.4-01",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "A bank is deciding whether to lend money to a business. What is the bank most interested in?",
    "options": [
      "The colour of the business premises",
      "The owner's personal hobbies",
      "The number of employees",
      "Whether the business can repay the loan and what assets it has as security"
    ],
    "answer": 3,
    "explanation": "A lender looks at profitability, liquidity and assets that could be used as security.",
    "optionFeedback": [
      "This is not financial information.",
      "The owner's hobbies are not relevant to the business's finances.",
      "The number of employees does not show whether a loan can be repaid.",
      "Correct. A lender looks at profitability, liquidity and assets that could be used as security."
    ]
  },
  {
    "id": "o7707-6.4-02",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "A supplier is deciding whether to give a new customer 60 days' credit. Which information is most useful?",
    "options": [
      "The customer's gross margin only",
      "The customer's non-current assets only",
      "The customer's number of shareholders",
      "The customer's liquidity and how quickly it pays its suppliers"
    ],
    "answer": 3,
    "explanation": "A supplier wants to know whether it will be paid on time, so liquidity ratios and trade payables days matter most.",
    "optionFeedback": [
      "Gross margin alone does not show whether the customer pays on time.",
      "Non-current assets alone do not show whether bills are paid on time.",
      "The number of shareholders does not show ability to pay.",
      "Correct. A supplier wants to know whether it will be paid on time, so liquidity ratios and trade payables days matter most."
    ]
  },
  {
    "id": "o7707-6.4-03",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "Why are members of a sports club interested in its income and expenditure account?",
    "options": [
      "To find out the club's share price",
      "To calculate the club's dividend",
      "To see their share of the club's profit",
      "To see whether subscriptions and other income cover the club's running costs"
    ],
    "answer": 3,
    "explanation": "Clubs do not distribute profit. Members want to know whether there is a surplus or deficit and whether subscriptions may need to change.",
    "optionFeedback": [
      "Clubs do not have shares.",
      "Clubs do not pay dividends.",
      "Clubs do not share profit among members.",
      "Correct. Clubs do not distribute profit. Members want to know whether there is a surplus or deficit and whether subscriptions may need to change."
    ]
  },
  {
    "id": "o7707-6.4-04",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "Which group is most interested in whether a business can afford pay rises and offer secure jobs?",
    "options": [
      "Competitors",
      "Employees",
      "Suppliers",
      "Customers"
    ],
    "answer": 1,
    "explanation": "Employees and their representatives look at profitability and stability to judge pay and job security.",
    "optionFeedback": [
      "Competitors are not the main users of this information.",
      "Correct. Employees and their representatives look at profitability and stability to judge pay and job security.",
      "Suppliers are mainly interested in being paid.",
      "Customers are mainly interested in whether the business will keep supplying them."
    ]
  },
  {
    "id": "o7707-6.4-05",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "Why does a government use the financial statements of a business?",
    "options": [
      "To choose the business's suppliers",
      "To help assess the tax the business must pay",
      "To approve the owner's drawings",
      "To decide the business's selling prices"
    ],
    "answer": 1,
    "explanation": "Tax authorities use profit and other figures from the accounts to assess tax.",
    "optionFeedback": [
      "The business chooses its own suppliers.",
      "Correct. Tax authorities use profit and other figures from the accounts to assess tax.",
      "The owner decides on drawings.",
      "The business sets its own selling prices."
    ]
  },
  {
    "id": "o7707-6.4-06",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "What are shareholders of a company mainly interested in?",
    "options": [
      "Profitability and the dividends they may receive",
      "The names of the company's suppliers",
      "The colour of the company's logo",
      "The company's wage rates only"
    ],
    "answer": 0,
    "explanation": "Shareholders want a return on their investment through dividends and growth.",
    "optionFeedback": [
      "Correct. Shareholders want a return on their investment through dividends and growth.",
      "This does not tell them about their investment.",
      "This is not financial information.",
      "They want to know about the return on their investment."
    ]
  },
  {
    "id": "o7707-6.4-07",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "How do managers use accounting information?",
    "options": [
      "Only to pay tax",
      "They do not use it",
      "To plan, control costs and make decisions",
      "Only to decide their own salaries"
    ],
    "answer": 2,
    "explanation": "Managers rely on accounting information to run the business day to day.",
    "optionFeedback": [
      "Tax is only one use of the information.",
      "Managers are major users of accounting information.",
      "Correct. Managers rely on accounting information to run the business day to day.",
      "Managers use it to run the whole business."
    ]
  },
  {
    "id": "o7707-6.4-08",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "Why might a customer be interested in a supplier's financial statements?",
    "options": [
      "To judge whether the supplier will continue to supply goods and honour guarantees",
      "To decide the supplier's selling prices",
      "To calculate the supplier's tax",
      "To find out the supplier's other customers"
    ],
    "answer": 0,
    "explanation": "Customers want a reliable supplier that will still be trading in the future.",
    "optionFeedback": [
      "Correct. Customers want a reliable supplier that will still be trading in the future.",
      "The supplier sets its own prices.",
      "That is the tax authority's job.",
      "The statements do not list customers."
    ]
  },
  {
    "id": "o7707-6.4-09",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "medium",
    "question": "Which ratio best shows a sole trader how well the capital invested in her business is earning?",
    "options": [
      "Current ratio",
      "Inventory turnover",
      "Return on capital employed",
      "Trade payables turnover"
    ],
    "answer": 2,
    "explanation": "ROCE compares profit with the capital used to earn it.",
    "optionFeedback": [
      "The current ratio measures liquidity.",
      "This measures how quickly goods are sold.",
      "Correct. ROCE compares profit with the capital used to earn it.",
      "This measures how quickly suppliers are paid."
    ]
  },
  {
    "id": "o7707-6.4-10",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "A bank has already lent money to a business. Why does it keep looking at the business's accounts?",
    "options": [
      "To decide the business's selling prices",
      "To choose the business's employees",
      "To check that the business can still pay the interest and repay the loan",
      "To calculate the owner's drawings"
    ],
    "answer": 2,
    "explanation": "A lender monitors profitability and liquidity throughout the loan.",
    "optionFeedback": [
      "The bank does not set prices.",
      "The bank does not choose employees.",
      "Correct. A lender monitors profitability and liquidity throughout the loan.",
      "The owner decides on drawings."
    ]
  },
  {
    "id": "o7707-6.4-11",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "medium",
    "question": "Someone is thinking of buying a business from its owner. Which information is most useful?",
    "options": [
      "The owner's personal bank balance",
      "The number of letters the business sends each month",
      "The opening hours of the bank the business uses",
      "The trend in profits and the value of net assets"
    ],
    "answer": 3,
    "explanation": "A buyer wants to know how profitable the business is likely to be and what it owns.",
    "optionFeedback": [
      "The owner's private finances are separate from the business.",
      "This is not useful financial information.",
      "This is not relevant to the value of the business.",
      "Correct. A buyer wants to know how profitable the business is likely to be and what it owns."
    ]
  },
  {
    "id": "o7707-6.4-12",
    "level": "O Level 7707",
    "topic": "6.4",
    "topicTitle": "Interested parties",
    "difficulty": "easy",
    "question": "Why might a competitor look at a company's published financial statements?",
    "options": [
      "To pay the company's debts",
      "To approve the company's dividends",
      "To compare its own performance with the company's",
      "To audit the company's accounts"
    ],
    "answer": 2,
    "explanation": "Published accounts let businesses benchmark against their rivals.",
    "optionFeedback": [
      "Competitors do not pay each other's debts.",
      "Directors propose dividends; competitors have no say.",
      "Correct. Published accounts let businesses benchmark against their rivals.",
      "Auditors, not competitors, check accounts."
    ]
  },
  {
    "id": "o7707-6.5-01",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "A business bought its premises 15 years ago for $80 000. Similar premises are now worth $400 000, but the statement of financial position still uses the cost. Which limitation of accounting statements does this show?",
    "options": [
      "The statements show future profits",
      "The statements include non-financial information",
      "Historic cost may not show current values",
      "The statements are not prepared regularly"
    ],
    "answer": 2,
    "explanation": "Assets are usually recorded at historic cost, so values on the statement of financial position can be far from today's values.",
    "optionFeedback": [
      "Financial statements show past results, not future profits.",
      "Financial statements leave out non-financial information.",
      "Correct. Assets are usually recorded at historic cost, so values on the statement of financial position can be far from today's values.",
      "Financial statements are prepared regularly, at least once a year."
    ]
  },
  {
    "id": "o7707-6.5-02",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "easy",
    "question": "Which important factor is not shown in a business's financial statements?",
    "options": [
      "Its profit for the year",
      "Its non-current assets",
      "The skill and loyalty of its staff",
      "Its trade payables"
    ],
    "answer": 2,
    "explanation": "Financial statements only show items measurable in money. Non-financial factors such as staff skill are left out.",
    "optionFeedback": [
      "Profit for the year is shown in the statement of profit or loss.",
      "Non-current assets are shown in the statement of financial position.",
      "Correct. Financial statements only show items measurable in money. Non-financial factors such as staff skill are left out.",
      "Trade payables are shown in the statement of financial position."
    ]
  },
  {
    "id": "o7707-6.5-03",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "Why can the profit for the year be affected by the judgement of the person preparing the accounts?",
    "options": [
      "The trial balance must always agree",
      "All figures come directly from bank statements",
      "Items such as depreciation and allowances for irrecoverable debts are estimates",
      "Profit is calculated only from cash received"
    ],
    "answer": 2,
    "explanation": "Several figures depend on estimates and accounting policies, so two accountants could report different profits for the same business.",
    "optionFeedback": [
      "An agreeing trial balance does not remove the need for estimates.",
      "Many figures, such as depreciation and accruals, do not come from bank statements.",
      "Correct. Several figures depend on estimates and accounting policies, so two accountants could report different profits for the same business.",
      "Profit is calculated on the accruals basis, not from cash received only."
    ]
  },
  {
    "id": "o7707-6.5-04",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "A bank receives a trader's statement of financial position dated eight months ago. Why should the bank be careful when using it?",
    "options": [
      "It shows the position at a past date, which may have changed since",
      "It shows only cash transactions",
      "It does not include any assets",
      "It includes future profits"
    ],
    "answer": 0,
    "explanation": "A statement of financial position is a snapshot at one date. Later events can change the position a lot.",
    "optionFeedback": [
      "Correct. A statement of financial position is a snapshot at one date. Later events can change the position a lot.",
      "It shows all assets and liabilities, not only cash transactions.",
      "A statement of financial position does include assets.",
      "It shows the past position, not future profits."
    ]
  },
  {
    "id": "o7707-6.5-05",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "hard",
    "question": "A trader's revenue rose by 5% this year, but general prices rose by 8% over the same year. What can be concluded?",
    "options": [
      "In real terms, the trader's sales have fallen",
      "The trader's profit has increased by 5%",
      "The trader's sales volume has increased by 5%",
      "Price changes do not affect comparisons of revenue"
    ],
    "answer": 0,
    "explanation": "Accounting statements do not adjust for inflation. If prices rose faster than revenue, the trader sold less in real terms.",
    "optionFeedback": [
      "Correct. Accounting statements do not adjust for inflation. If prices rose faster than revenue, the trader sold less in real terms.",
      "The question gives no information about profit.",
      "Prices rose by 8%, so a 5% rise in revenue means fewer goods were sold.",
      "Price changes do affect comparisons. Accounting statements do not adjust for inflation."
    ]
  },
  {
    "id": "o7707-6.5-06",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "easy",
    "question": "A buyer wants to know how much profit a business will make next year. What limitation of financial statements does this show?",
    "options": [
      "Financial statements include non-financial information",
      "Financial statements are prepared every week",
      "Financial statements show past results, not future ones",
      "Financial statements show only cash"
    ],
    "answer": 2,
    "explanation": "The past is a guide, but future profit depends on many factors not shown in the statements.",
    "optionFeedback": [
      "They leave out non-financial information.",
      "They are usually prepared once a year.",
      "Correct. The past is a guide, but future profit depends on many factors not shown in the statements.",
      "They are prepared on the accruals basis."
    ]
  },
  {
    "id": "o7707-6.5-07",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "A trader changed from straight-line to reducing balance depreciation this year. How does this affect a comparison with last year's results?",
    "options": [
      "It only affects the bank balance",
      "It makes the comparison more accurate",
      "The profits of the two years may not be directly comparable",
      "It has no effect on profit"
    ],
    "answer": 2,
    "explanation": "Consistent policies are needed for meaningful comparison between years.",
    "optionFeedback": [
      "Depreciation does not affect the bank balance.",
      "Changing methods makes comparison harder.",
      "Correct. Consistent policies are needed for meaningful comparison between years.",
      "A different method gives a different depreciation charge."
    ]
  },
  {
    "id": "o7707-6.5-08",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "easy",
    "question": "Which factor would be important to someone buying a shop but is not shown in its financial statements?",
    "options": [
      "The shop's location",
      "The shop's trade payables",
      "The shop's revenue",
      "The shop's inventory"
    ],
    "answer": 0,
    "explanation": "Location affects future sales but cannot be measured in money in the accounts.",
    "optionFeedback": [
      "Correct. Location affects future sales but cannot be measured in money in the accounts.",
      "Trade payables are shown in the statement of financial position.",
      "Revenue is shown in the statement of profit or loss.",
      "Inventory is shown in the statement of financial position."
    ]
  },
  {
    "id": "o7707-6.5-09",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "Financial statements are usually prepared once a year. What limitation does this create?",
    "options": [
      "The statements include every future transaction",
      "The statements cannot show a profit",
      "The statements are never checked",
      "The information may be out of date when decisions are made"
    ],
    "answer": 3,
    "explanation": "Conditions can change a lot between the year end and the time the statements are used.",
    "optionFeedback": [
      "They cover only the past year.",
      "They show profit for the year.",
      "Annual preparation does not stop checking.",
      "Correct. Conditions can change a lot between the year end and the time the statements are used."
    ]
  },
  {
    "id": "o7707-6.5-10",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "hard",
    "question": "A trader pays her suppliers later than usual just before the year end so that her bank balance looks higher. What limitation of financial statements does this show?",
    "options": [
      "The statements are based on money measurement only",
      "The statements ignore the bank balance",
      "The year-end position may not represent the business's normal position",
      "The statements show future profits"
    ],
    "answer": 2,
    "explanation": "The statement of financial position is a snapshot that can be affected by timing at the year end.",
    "optionFeedback": [
      "This is true but is not what the example shows.",
      "The bank balance is shown.",
      "Correct. The statement of financial position is a snapshot that can be affected by timing at the year end.",
      "They show the past year."
    ]
  },
  {
    "id": "o7707-6.5-11",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "easy",
    "question": "Which figure in a set of financial statements is an estimate?",
    "options": [
      "The bank balance after reconciliation",
      "Share capital issued",
      "Depreciation of non-current assets",
      "Cash sales for the year"
    ],
    "answer": 2,
    "explanation": "Depreciation depends on estimates of useful life and residual value.",
    "optionFeedback": [
      "This can be checked with the bank statement.",
      "This is a known amount.",
      "Correct. Depreciation depends on estimates of useful life and residual value.",
      "These are recorded from actual receipts."
    ]
  },
  {
    "id": "o7707-6.5-12",
    "level": "O Level 7707",
    "topic": "6.5",
    "topicTitle": "Limitations of accounting statements",
    "difficulty": "medium",
    "question": "A factory's activities cause pollution in the local river. Why is this not shown in its financial statements?",
    "options": [
      "Pollution is shown as an asset",
      "Pollution is always a capital expense",
      "The trial balance would not agree",
      "Only items that can be measured in money are recorded"
    ],
    "answer": 3,
    "explanation": "Environmental effects are important but are left out unless they result in a measurable cost.",
    "optionFeedback": [
      "Pollution is not an asset.",
      "Pollution is not an expense of either kind until it costs money.",
      "The trial balance has nothing to do with this.",
      "Correct. Environmental effects are important but are left out unless they result in a measurable cost."
    ]
  },
  {
    "id": "o7707-7.1-01",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "A trader pays his home electricity bill from his personal bank account and does not record it in the business books. Which accounting principle is he applying?",
    "options": [
      "Realisation",
      "Business entity",
      "Duality",
      "Going concern"
    ],
    "answer": 1,
    "explanation": "The business is treated as separate from its owner, so the owner's private transactions are not recorded.",
    "optionFeedback": [
      "Realisation is about when revenue is recognised.",
      "Correct. The business is treated as separate from its owner, so the owner's private transactions are not recorded.",
      "Duality is about every transaction having two effects.",
      "Going concern is about assuming the business will continue."
    ]
  },
  {
    "id": "o7707-7.1-02",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "A business buys a stapler for $15 that will last several years, but records it as an expense. Which accounting principle allows this?",
    "options": [
      "Materiality",
      "Money measurement",
      "Historic cost",
      "Consistency"
    ],
    "answer": 0,
    "explanation": "The amount is too small to affect anyone's view of the accounts, so treating it as an expense is acceptable.",
    "optionFeedback": [
      "Correct. The amount is too small to affect anyone's view of the accounts, so treating it as an expense is acceptable.",
      "The stapler can be measured in money, so this is not the reason.",
      "Historic cost would record the stapler as an asset at cost. Materiality allows it to be expensed.",
      "Consistency is about using the same methods each year."
    ]
  },
  {
    "id": "o7707-7.1-03",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "A business does not record the value of its good relationship with customers in its accounts. Which accounting principle explains this?",
    "options": [
      "Prudence",
      "Going concern",
      "Matching",
      "Money measurement"
    ],
    "answer": 3,
    "explanation": "Only items that can be measured reliably in money are recorded.",
    "optionFeedback": [
      "Prudence is about not overstating assets and profit.",
      "Going concern is about assuming the business will continue.",
      "Matching is about recording income and expenses in the period they relate to.",
      "Correct. Only items that can be measured reliably in money are recorded."
    ]
  },
  {
    "id": "o7707-7.1-04",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "medium",
    "question": "Non-current assets are shown at cost less depreciation rather than at what they could be sold for today. Which accounting principle supports this?",
    "options": [
      "Going concern",
      "Business entity",
      "Materiality",
      "Realisation"
    ],
    "answer": 0,
    "explanation": "If the business is expected to continue, assets are valued on the basis of continued use, not a forced sale.",
    "optionFeedback": [
      "Correct. If the business is expected to continue, assets are valued on the basis of continued use, not a forced sale.",
      "Business entity is about separating the owner's affairs from the business.",
      "Materiality is about the size of an item.",
      "Realisation is about when revenue is recognised."
    ]
  },
  {
    "id": "o7707-7.1-05",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "A trader uses the same depreciation method every year. Which accounting principle is she applying?",
    "options": [
      "Realisation",
      "Prudence",
      "Duality",
      "Consistency"
    ],
    "answer": 3,
    "explanation": "Using the same methods each year allows the results of different years to be compared.",
    "optionFeedback": [
      "Realisation is about when revenue is recognised.",
      "Prudence is about not overstating assets and profit.",
      "Duality is about every transaction having two effects.",
      "Correct. Using the same methods each year allows the results of different years to be compared."
    ]
  },
  {
    "id": "o7707-7.1-06",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "hard",
    "question": "Goods were delivered to a customer on 28 December with an invoice. The customer paid on 15 January. The seller's year ends on 31 December. When is the revenue recognised, and which principle applies?",
    "options": [
      "In the year ended 31 December, under going concern",
      "In the following year, under realisation",
      "In the following year, under prudence",
      "In the year ended 31 December, under realisation"
    ],
    "answer": 3,
    "explanation": "Revenue is recognised when the goods are delivered and ownership passes to the customer, not when cash is received.",
    "optionFeedback": [
      "Going concern is not about when revenue is recognised.",
      "Realisation points to the delivery date, 28 December, not the payment date.",
      "The revenue was earned when the goods were delivered, so it is not delayed to next year.",
      "Correct. Revenue is recognised when the goods are delivered and ownership passes to the customer, not when cash is received."
    ]
  },
  {
    "id": "o7707-7.1-07",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "Which accounting principle states that every transaction has two equal effects?",
    "options": [
      "Consistency",
      "Duality",
      "Materiality",
      "Historic cost"
    ],
    "answer": 1,
    "explanation": "Duality is the basis of double entry and of the accounting equation.",
    "optionFeedback": [
      "Consistency is about using the same methods each year.",
      "Correct. Duality is the basis of double entry and of the accounting equation.",
      "Materiality is about the size of an item.",
      "Historic cost is about recording items at their original cost."
    ]
  },
  {
    "id": "o7707-7.1-08",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "medium",
    "question": "A building bought for $200 000 is still recorded at that cost less depreciation, although its market value is now higher. Which accounting principle is applied?",
    "options": [
      "Prudence",
      "Historic cost",
      "Going concern",
      "Realisation"
    ],
    "answer": 1,
    "explanation": "Assets are recorded at their original cost, not at their current value.",
    "optionFeedback": [
      "Prudence is about not overstating assets and profit, but the reason for using cost here is historic cost.",
      "Correct. Assets are recorded at their original cost, not at their current value.",
      "Going concern is about assuming the business continues.",
      "Realisation is about when revenue is recognised."
    ]
  },
  {
    "id": "o7707-7.1-09",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "A business records losses it expects to make but does not record gains until they are earned. Which accounting principle is this?",
    "options": [
      "Duality",
      "Materiality",
      "Consistency",
      "Prudence"
    ],
    "answer": 3,
    "explanation": "Prudence means profits and assets should not be overstated.",
    "optionFeedback": [
      "Duality is about every transaction having two effects.",
      "Materiality is about the size of an item.",
      "Consistency is about using the same methods each year.",
      "Correct. Prudence means profits and assets should not be overstated."
    ]
  },
  {
    "id": "o7707-7.1-10",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "medium",
    "question": "Electricity used in December is billed and paid in January. The year ends on 31 December. The cost is recorded as an expense of the year ended 31 December. Which principle is applied?",
    "options": [
      "Business entity",
      "Matching (accruals)",
      "Realisation",
      "Money measurement"
    ],
    "answer": 1,
    "explanation": "The expense is recorded in the period in which it was used, not when it was paid.",
    "optionFeedback": [
      "Business entity is about separating the owner's affairs.",
      "Correct. The expense is recorded in the period in which it was used, not when it was paid.",
      "Realisation is about recognising revenue, not expenses.",
      "Money measurement is about recording only items measurable in money."
    ]
  },
  {
    "id": "o7707-7.1-11",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "easy",
    "question": "The business pays the owner's son's school fees, and the amount is recorded as drawings. Which accounting principle is applied?",
    "options": [
      "Business entity",
      "Going concern",
      "Consistency",
      "Prudence"
    ],
    "answer": 0,
    "explanation": "The owner's private spending is not a business expense.",
    "optionFeedback": [
      "Correct. The owner's private spending is not a business expense.",
      "Going concern is about assuming the business continues.",
      "Consistency is about using the same methods each year.",
      "Prudence is about not overstating assets and profit."
    ]
  },
  {
    "id": "o7707-7.1-12",
    "level": "O Level 7707",
    "topic": "7.1",
    "topicTitle": "Accounting concepts",
    "difficulty": "medium",
    "question": "A business is going to close next month. Its assets are now valued at what they can be sold for. Which principle no longer applies?",
    "options": [
      "Money measurement",
      "Duality",
      "Going concern",
      "Business entity"
    ],
    "answer": 2,
    "explanation": "Going concern assumes the business will continue. When it will not, assets are valued on a sale basis.",
    "optionFeedback": [
      "Items are still measured in money.",
      "Every transaction still has two effects.",
      "Correct. Going concern assumes the business will continue. When it will not, assets are valued on a sale basis.",
      "The business is still separate from its owner."
    ]
  },
  {
    "id": "o7707-7.2-01",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "A business owner asks his accountant to record a family holiday as a business expense to reduce tax. Which ethical principle would the accountant break by agreeing?",
    "options": [
      "Integrity",
      "Confidentiality",
      "Professional competence",
      "Objectivity"
    ],
    "answer": 0,
    "explanation": "Integrity means being honest and straightforward. Recording a false expense is dishonest.",
    "optionFeedback": [
      "Correct. Integrity means being honest and straightforward. Recording a false expense is dishonest.",
      "Confidentiality is about not disclosing information.",
      "Professional competence is about having the skills to do the work.",
      "The core problem is dishonesty, which is integrity rather than bias."
    ]
  },
  {
    "id": "o7707-7.2-02",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "An accountant tells a friend how much profit one of her clients made last year. Which ethical principle has she broken?",
    "options": [
      "Professional behaviour",
      "Objectivity",
      "Confidentiality",
      "Integrity"
    ],
    "answer": 2,
    "explanation": "Information gained at work must not be disclosed without permission or a legal duty to do so.",
    "optionFeedback": [
      "Professional behaviour is about complying with laws and not discrediting the profession. The specific breach is confidentiality.",
      "Objectivity is about avoiding bias.",
      "Correct. Information gained at work must not be disclosed without permission or a legal duty to do so.",
      "Integrity is about honesty. The problem here is disclosing information."
    ]
  },
  {
    "id": "o7707-7.2-03",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "medium",
    "question": "An accountant is asked to prepare the accounts of a manufacturing company but has no training or experience in manufacturing accounts. Which ethical principle is most at risk?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Professional competence and due care",
      "Objectivity"
    ],
    "answer": 2,
    "explanation": "Accountants should only take on work they have the skills to do properly, or get the training or help they need.",
    "optionFeedback": [
      "Confidentiality is about not disclosing information.",
      "Integrity is about honesty.",
      "Correct. Accountants should only take on work they have the skills to do properly, or get the training or help they need.",
      "Objectivity is about avoiding bias."
    ]
  },
  {
    "id": "o7707-7.2-04",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "medium",
    "question": "An accountant is asked to review the financial statements of a business owned by her brother. Which ethical principle is most at risk?",
    "options": [
      "Objectivity",
      "Professional behaviour",
      "Confidentiality",
      "Professional competence and due care"
    ],
    "answer": 0,
    "explanation": "A close family relationship could influence her judgement, so her objectivity is threatened.",
    "optionFeedback": [
      "Correct. A close family relationship could influence her judgement, so her objectivity is threatened.",
      "Professional behaviour is about complying with laws and not discrediting the profession.",
      "Confidentiality is about not disclosing information.",
      "She may have the skills. The risk comes from the family relationship."
    ]
  },
  {
    "id": "o7707-7.2-05",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "Why do accountants follow an ethical framework?",
    "options": [
      "So that people using the financial information can trust it",
      "So that accountants can charge higher fees",
      "So that businesses always make a profit",
      "So that financial statements are shorter"
    ],
    "answer": 0,
    "explanation": "Owners, lenders and others rely on the information. An ethical framework supports honesty, objectivity and confidentiality.",
    "optionFeedback": [
      "Correct. Owners, lenders and others rely on the information. An ethical framework supports honesty, objectivity and confidentiality.",
      "The purpose is trust, not higher fees.",
      "Ethics cannot guarantee a profit.",
      "Ethics is not about the length of the statements."
    ]
  },
  {
    "id": "o7707-7.2-06",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "An accountant posts rude comments about her clients on social media. Which ethical principle has she broken?",
    "options": [
      "Objectivity",
      "Integrity",
      "Professional competence and due care",
      "Professional behaviour"
    ],
    "answer": 3,
    "explanation": "Professional behaviour means avoiding actions that bring the profession into disrepute.",
    "optionFeedback": [
      "Objectivity is about avoiding bias in judgements.",
      "Integrity is about honesty. The problem here is behaviour that discredits the profession.",
      "This is about having the skills to do the work.",
      "Correct. Professional behaviour means avoiding actions that bring the profession into disrepute."
    ]
  },
  {
    "id": "o7707-7.2-07",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "medium",
    "question": "An accountant checks a supplier's invoices and accepts an expensive gift from that supplier. Which ethical principle is most at risk?",
    "options": [
      "Professional behaviour",
      "Confidentiality",
      "Objectivity",
      "Professional competence and due care"
    ],
    "answer": 2,
    "explanation": "Gifts can create a conflict of interest that threatens objectivity.",
    "optionFeedback": [
      "The main risk is that the gift could bias her judgement.",
      "No information is being disclosed.",
      "Correct. Gifts can create a conflict of interest that threatens objectivity.",
      "Her skills are not in question."
    ]
  },
  {
    "id": "o7707-7.2-08",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "An accountant knowingly signs financial statements that hide a large debt. Which ethical principle has he broken?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Professional competence and due care",
      "Objectivity"
    ],
    "answer": 1,
    "explanation": "Integrity requires honesty. Hiding a debt makes the statements misleading.",
    "optionFeedback": [
      "Confidentiality is about disclosing information.",
      "Correct. Integrity requires honesty. Hiding a debt makes the statements misleading.",
      "He knows what he is doing; the problem is dishonesty.",
      "Objectivity is about bias; knowingly hiding a debt is dishonesty."
    ]
  },
  {
    "id": "o7707-7.2-09",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "medium",
    "question": "When may an accountant disclose confidential information about a client?",
    "options": [
      "Never, under any circumstances",
      "Whenever it would help the accountant's career",
      "When the client gives permission or the law requires it",
      "Whenever a friend asks"
    ],
    "answer": 2,
    "explanation": "Confidentiality has limited exceptions, such as legal requirements.",
    "optionFeedback": [
      "Disclosure is allowed with permission or a legal duty.",
      "Personal benefit is not a reason to disclose.",
      "Correct. Confidentiality has limited exceptions, such as legal requirements.",
      "Friends have no right to client information."
    ]
  },
  {
    "id": "o7707-7.2-10",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "An accountant attends training each year to keep up to date with accounting standards. Which ethical principle is she following?",
    "options": [
      "Integrity",
      "Professional competence and due care",
      "Objectivity",
      "Confidentiality"
    ],
    "answer": 1,
    "explanation": "Accountants must keep their knowledge and skills up to date.",
    "optionFeedback": [
      "Training is not mainly about honesty.",
      "Correct. Accountants must keep their knowledge and skills up to date.",
      "Training is not about avoiding bias.",
      "Training is not about protecting information."
    ]
  },
  {
    "id": "o7707-7.2-11",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "medium",
    "question": "A manager pressures an accountant to make the profit look higher than it is. What should the accountant do first?",
    "options": [
      "Change the figures quietly to avoid conflict",
      "Refuse and raise the concern with a senior person or the organisation's ethics contact",
      "Tell a newspaper immediately",
      "Resign without telling anyone why"
    ],
    "answer": 1,
    "explanation": "An ethical framework expects accountants to refuse to mislead and to report pressure through proper channels.",
    "optionFeedback": [
      "That would break the principle of integrity.",
      "Correct. An ethical framework expects accountants to refuse to mislead and to report pressure through proper channels.",
      "The concern should first be raised through proper internal routes.",
      "The issue should be reported so it can be dealt with."
    ]
  },
  {
    "id": "o7707-7.2-12",
    "level": "O Level 7707",
    "topic": "7.2",
    "topicTitle": "Ethical considerations",
    "difficulty": "easy",
    "question": "Why do banks rely on accountants behaving ethically?",
    "options": [
      "Banks do not use financial statements",
      "Banks use financial statements to decide whether to lend, so they must be honest",
      "Ethics guarantees that every business is profitable",
      "Banks prepare all financial statements themselves"
    ],
    "answer": 1,
    "explanation": "Honest information allows lenders to make sound decisions.",
    "optionFeedback": [
      "Banks use them when making lending decisions.",
      "Correct. Honest information allows lenders to make sound decisions.",
      "Ethics cannot guarantee profit.",
      "Businesses prepare their own statements."
    ]
  },
  {
    "id": "o7707-7.3-01",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "What is an advantage of storing accounting records in cloud storage?",
    "options": [
      "No internet connection is needed",
      "Records cannot be lost in any circumstances",
      "Records can be accessed from different locations and are usually backed up automatically",
      "There is no risk of unauthorised access"
    ],
    "answer": 2,
    "explanation": "Cloud storage allows remote access and automatic backups, but it depends on the internet and still needs security measures.",
    "optionFeedback": [
      "Cloud storage needs an internet connection.",
      "Cloud records can still be lost, for example if an account is deleted or hacked.",
      "Correct. Cloud storage allows remote access and automatic backups, but it depends on the internet and still needs security measures.",
      "Cloud storage still carries a risk of unauthorised access."
    ]
  },
  {
    "id": "o7707-7.3-02",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "What is a disadvantage of keeping accounting records only in digital form on one office computer?",
    "options": [
      "All records could be lost if the computer fails and there is no backup",
      "Records cannot be searched",
      "Records cannot be printed",
      "Records take up a lot of physical space"
    ],
    "answer": 0,
    "explanation": "A single device is a single point of failure. Regular backups to another device or to the cloud reduce this risk.",
    "optionFeedback": [
      "Correct. A single device is a single point of failure. Regular backups to another device or to the cloud reduce this risk.",
      "Digital records are easy to search.",
      "Digital records can be printed when needed.",
      "Digital records take up very little physical space."
    ]
  },
  {
    "id": "o7707-7.3-03",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "medium",
    "question": "Which practice helps a business store its records in a more sustainable way?",
    "options": [
      "Printing two copies of every document",
      "Deleting old records without a backup",
      "Sending and storing invoices electronically instead of printing them",
      "Keeping paper files and digital files of everything"
    ],
    "answer": 2,
    "explanation": "Digital documents reduce paper use. They still need secure storage and backups for the period records must be kept.",
    "optionFeedback": [
      "Printing extra copies uses more paper.",
      "Deleting records without a backup is unsafe and may break record-keeping rules.",
      "Correct. Digital documents reduce paper use. They still need secure storage and backups for the period records must be kept.",
      "Keeping everything twice uses more resources."
    ]
  },
  {
    "id": "o7707-7.3-04",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "Which measure helps keep digital accounting records secure?",
    "options": [
      "Storing the only copy on a USB stick",
      "Using strong passwords and limiting who can access the records",
      "Sharing one password among all staff",
      "Turning off software updates"
    ],
    "answer": 1,
    "explanation": "Access controls and good passwords reduce the risk of unauthorised access or changes.",
    "optionFeedback": [
      "Keeping the only copy on a USB stick risks losing everything.",
      "Correct. Access controls and good passwords reduce the risk of unauthorised access or changes.",
      "Sharing one password makes it impossible to control who accesses the records.",
      "Software updates often fix security weaknesses."
    ]
  },
  {
    "id": "o7707-7.3-05",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "What is an advantage of using accounting software instead of handwritten books?",
    "options": [
      "The owner no longer needs to check the records",
      "Totals and reports are produced automatically and quickly",
      "No business documents are needed",
      "Errors of principle cannot happen"
    ],
    "answer": 1,
    "explanation": "Software does calculations and reports instantly, but it cannot stop every error, such as posting to the wrong type of account.",
    "optionFeedback": [
      "The owner still needs to check the records.",
      "Correct. Software does calculations and reports instantly, but it cannot stop every error, such as posting to the wrong type of account.",
      "Business documents are still needed as evidence of transactions.",
      "Software can still post an amount to the wrong type of account."
    ]
  },
  {
    "id": "o7707-7.3-06",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "Which is a digital application used in accounting?",
    "options": [
      "Accounting software that posts sales invoices to the ledgers automatically",
      "A ledger kept in a bound book",
      "A paper receipt book",
      "A handwritten general journal"
    ],
    "answer": 0,
    "explanation": "Digital applications record and process transactions electronically.",
    "optionFeedback": [
      "Correct. Digital applications record and process transactions electronically.",
      "This is a manual record.",
      "This is a manual record.",
      "This is a manual record."
    ]
  },
  {
    "id": "o7707-7.3-07",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "What is cloud storage?",
    "options": [
      "Records saved on a USB stick",
      "Paper records kept in a filing cabinet",
      "Records saved on servers run by a provider and accessed over the internet",
      "Records saved on the office computer's hard drive"
    ],
    "answer": 2,
    "explanation": "Cloud storage is a type of digital service accessed online.",
    "optionFeedback": [
      "That is storage on a device.",
      "That is manual storage.",
      "Correct. Cloud storage is a type of digital service accessed online.",
      "That is local device storage."
    ]
  },
  {
    "id": "o7707-7.3-08",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "medium",
    "question": "Which is good practice for backing up digital accounting records?",
    "options": [
      "Deleting old backups straight away",
      "Backing up once when the business starts",
      "Keeping the only copy on the same computer",
      "Keeping a regular copy in a different location from the original"
    ],
    "answer": 3,
    "explanation": "A copy stored elsewhere protects against fire, theft or device failure.",
    "optionFeedback": [
      "Older backups may be needed to recover data.",
      "Records change daily, so backups must be regular.",
      "If that computer fails, everything is lost.",
      "Correct. A copy stored elsewhere protects against fire, theft or device failure."
    ]
  },
  {
    "id": "o7707-7.3-09",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "Which choice reduces the environmental impact of keeping records?",
    "options": [
      "Printing every email for the files",
      "Receiving digital bank statements instead of paper ones",
      "Posting paper statements to every customer each week",
      "Keeping two paper copies of every invoice"
    ],
    "answer": 1,
    "explanation": "Digital documents reduce paper and postage, which is more sustainable.",
    "optionFeedback": [
      "This increases paper use.",
      "Correct. Digital documents reduce paper and postage, which is more sustainable.",
      "This increases paper and transport use.",
      "This doubles paper use."
    ]
  },
  {
    "id": "o7707-7.3-10",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "easy",
    "question": "What is a disadvantage of storing records only on paper?",
    "options": [
      "They update totals automatically",
      "They can be hacked online",
      "They cannot be read without electricity",
      "They can be destroyed by fire or water and take up a lot of space"
    ],
    "answer": 3,
    "explanation": "Manual storage is vulnerable to physical damage and needs storage space.",
    "optionFeedback": [
      "Paper records do not update anything automatically.",
      "Paper records cannot be hacked online.",
      "Paper records can be read without electricity.",
      "Correct. Manual storage is vulnerable to physical damage and needs storage space."
    ]
  },
  {
    "id": "o7707-7.3-11",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "medium",
    "question": "What is an advantage of storing records on the office computer's hard drive rather than in the cloud?",
    "options": [
      "The records can be reached from any location",
      "The records can be used without an internet connection",
      "The records are automatically safe from theft",
      "The records never need backing up"
    ],
    "answer": 1,
    "explanation": "Local storage does not depend on the internet, but it needs good backups.",
    "optionFeedback": [
      "That is an advantage of cloud storage.",
      "Correct. Local storage does not depend on the internet, but it needs good backups.",
      "A computer can be stolen or damaged.",
      "Local records need regular backups."
    ]
  },
  {
    "id": "o7707-7.3-12",
    "level": "O Level 7707",
    "topic": "7.3",
    "topicTitle": "Technology and sustainability",
    "difficulty": "medium",
    "question": "Why must a business keep its customers' personal data secure?",
    "options": [
      "Because customer data is shown in the financial statements",
      "It has a legal duty to protect the data, and customers must be able to trust it",
      "It is not necessary for small businesses",
      "Because secure data increases profit automatically"
    ],
    "answer": 1,
    "explanation": "Data protection laws apply, and a data leak can damage the business's reputation.",
    "optionFeedback": [
      "Personal data is not shown in the statements.",
      "Correct. Data protection laws apply, and a data leak can damage the business's reputation.",
      "Small businesses must also protect personal data.",
      "Security is about protection, not automatic profit."
    ]
  }
];

export const mcqsByTopic = (topic: string) =>
  oLevelAccountingMcqs.filter((q) => q.topic === topic);

const shuffle = <T,>(items: T[]): T[] => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Number answers stay in ascending order (exam style, and easier to scan).
const isNumericOption = (s: string) =>
  /^\$?[\d ,.]+(%| days| : 1)?( debit| credit)?$/.test(s.trim());

// Shuffles the options of one question and keeps the answer and feedback lined up.
export const shuffleOptions = (q: AccountingMcq): AccountingMcq => {
  if (q.options.every(isNumericOption)) return q;
  const order = shuffle([0, 1, 2, 3]);
  return {
    ...q,
    options: order.map((i) => q.options[i]) as AccountingMcq["options"],
    optionFeedback: order.map((i) => q.optionFeedback[i]) as AccountingMcq["optionFeedback"],
    answer: order.indexOf(q.answer) as AccountingMcq["answer"],
  };
};

// Draws n questions for a topic quiz. Questions the student saw last attempt
// (pass their ids in lastIds) are used only if there are not enough new ones.
// Question order and text option order are shuffled on every attempt.
export const drawQuiz = (topic: string, n = 5, lastIds: string[] = []): AccountingMcq[] => {
  const pool = shuffle(mcqsByTopic(topic));
  const fresh = pool.filter((q) => !lastIds.includes(q.id));
  const seen = pool.filter((q) => lastIds.includes(q.id));
  return [...fresh, ...seen].slice(0, n).map(shuffleOptions);
};
