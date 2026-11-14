// O Level Accounting 7707 flashcards and topic maps, original material written for EduForEveryone.
// Mapped to the Cambridge O Level Accounting 7707 syllabus for 2027 to 2029 (topics 1.1 to 7.3).
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
//
// SERVER-ONLY: import this file only from server components (page.tsx files).
// Only the current topic's revision data is passed to the client.
// Rules: plain English, no em dashes, en dashes or arrows.

import type { TopicRevision } from "./oLevelAccountingRevisionTypes";

export const O_LEVEL_ACCOUNTING_REVISION: Record<string, TopicRevision> = {
  "1.1": {
    "mindMap": {
      "centre": "Purpose of accounting",
      "branches": [
        {
          "label": "Book-keeping",
          "items": [
            "Records daily transactions",
            "Puts each one in the correct book",
            "Must be accurate"
          ]
        },
        {
          "label": "Accounting",
          "items": [
            "Uses the book-keeping records",
            "Prepares financial statements",
            "Studies figures to help decisions"
          ]
        },
        {
          "label": "Why measure profit",
          "items": [
            "See if the business is successful",
            "Control drawings",
            "Compare with other years",
            "Tax and bank loans"
          ]
        },
        {
          "label": "Monitoring and decisions",
          "items": [
            "Compare with last year and the budget",
            "Pricing, buying assets, loans",
            "Track receivables and payables",
            "Helps spot theft and fraud"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is book-keeping?",
        "back": "Recording the money transactions of a business, every day, in the correct books.",
        "tag": "Definition"
      },
      {
        "front": "What is accounting?",
        "back": "Using the book-keeping records to prepare financial statements and study them to help people make decisions.",
        "tag": "Definition"
      },
      {
        "front": "One-line difference between book-keeping and accounting?",
        "back": "Book-keeping records. Accounting uses those records."
      },
      {
        "front": "What is a transaction?",
        "back": "Any business event that involves money or money's worth, such as buying goods, paying rent or making a sale.",
        "tag": "Definition"
      },
      {
        "front": "When does a business make a profit?",
        "back": "When income is more than expenses.",
        "tag": "Definition"
      },
      {
        "front": "When does a business make a loss?",
        "back": "When expenses are more than income.",
        "tag": "Definition"
      },
      {
        "front": "Name the two main financial statements.",
        "back": "The statement of profit or loss and the statement of financial position."
      },
      {
        "front": "Give two reasons an owner needs to know the profit.",
        "back": "Any two: to see if the business is successful, to decide how much to take as drawings, to compare with other years, to work out tax, to show a bank when asking for a loan."
      },
      {
        "front": "What are drawings?",
        "back": "Money or goods the owner takes from the business for personal use.",
        "tag": "Definition"
      },
      {
        "front": "If drawings are bigger than profit, what happens?",
        "back": "The owner is slowly taking away the capital of the business."
      },
      {
        "front": "Is cash in the till the same as profit?",
        "back": "No. A business can have cash and still make a loss, or make a profit and be short of cash."
      },
      {
        "front": "Give two decisions accounting information helps with.",
        "back": "Any two: setting selling prices, whether to buy a new asset, whether to stop selling a product, whether a loan is needed, whether customers pay on time."
      },
      {
        "front": "How does keeping records help against fraud?",
        "back": "Records show what should be there, so missing cash or goods are easier to spot."
      }
    ]
  },
  "1.2": {
    "mindMap": {
      "centre": "The accounting equation",
      "branches": [
        {
          "label": "The equation",
          "items": [
            "Assets = Liabilities + Owner's equity",
            "Both sides always equal",
            "Rearrange to find a missing figure"
          ]
        },
        {
          "label": "Assets",
          "items": [
            "Owned by the business, or owed to it",
            "Premises, vehicles, inventory",
            "Trade receivables, bank, cash"
          ]
        },
        {
          "label": "Liabilities",
          "items": [
            "Owed to people outside the business",
            "Trade payables, loans",
            "Bank overdraft, unpaid expenses"
          ]
        },
        {
          "label": "Owner's equity",
          "items": [
            "Owed to the owner (capital)",
            "Up: capital introduced, profit",
            "Down: drawings, loss"
          ]
        },
        {
          "label": "Transactions",
          "items": [
            "Every transaction changes at least two items",
            "One side up and down, or both sides together",
            "The equation still balances"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "State the accounting equation.",
        "back": "Assets = Liabilities + Owner's equity",
        "tag": "Rule"
      },
      {
        "front": "What is an asset?",
        "back": "Something the business owns, or money owed to the business.",
        "tag": "Definition"
      },
      {
        "front": "What is a liability?",
        "back": "An amount the business owes to someone outside the business.",
        "tag": "Definition"
      },
      {
        "front": "What is owner's equity?",
        "back": "The amount the business owes to its owner. It is also called capital.",
        "tag": "Definition"
      },
      {
        "front": "Formula for owner's equity?",
        "back": "Owner's equity = Assets minus Liabilities",
        "tag": "Formula"
      },
      {
        "front": "Assets $60,000, liabilities $15,000. Owner's equity?",
        "back": "60,000 minus 15,000 = $45,000",
        "tag": "Calculation"
      },
      {
        "front": "Is a bank overdraft an asset or a liability?",
        "back": "A liability. It is money the business owes the bank."
      },
      {
        "front": "Are trade receivables assets or liabilities?",
        "back": "Assets. Customers owe the business money."
      },
      {
        "front": "Two things that increase owner's equity.",
        "back": "Capital introduced by the owner, and profit."
      },
      {
        "front": "Two things that decrease owner's equity.",
        "back": "Drawings, and a loss."
      },
      {
        "front": "Buy a computer for $900 on credit. Effect on the equation?",
        "back": "Assets up $900, liabilities up $900. Equity does not change."
      },
      {
        "front": "Owner takes $1,000 cash for personal use. Effect?",
        "back": "Cash (asset) down $1,000. Owner's equity down $1,000."
      },
      {
        "front": "Are drawings a business expense?",
        "back": "No. Drawings reduce owner's equity. They are not an expense."
      },
      {
        "front": "Closing equity formula?",
        "back": "Closing equity = Opening equity + Extra capital + Profit minus Drawings",
        "tag": "Formula"
      }
    ]
  },
  "2.1": {
    "mindMap": {
      "centre": "Double entry book-keeping",
      "branches": [
        {
          "label": "The rule",
          "items": [
            "Every transaction: one debit, one credit",
            "Same amount on both",
            "Total debits = total credits"
          ]
        },
        {
          "label": "DEAD CLIC",
          "items": [
            "Debit increases: Drawings, Expenses, Assets",
            "Credit increases: Liabilities, Income, Capital",
            "Decrease on the opposite side"
          ]
        },
        {
          "label": "Ledger accounts",
          "items": [
            "Details column names the other account",
            "Goods for resale: Purchases and Sales",
            "Balance c/d on the smaller side"
          ]
        },
        {
          "label": "Reading balances",
          "items": [
            "Debit on a customer: they owe us",
            "Credit on a supplier: we owe them",
            "Credit on Bank: overdraft"
          ]
        },
        {
          "label": "Ledger divisions",
          "items": [
            "Sales ledger: credit customers",
            "Purchases ledger: credit suppliers",
            "Nominal ledger: all other accounts",
            "Running balance and digital ledgers"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is double entry?",
        "back": "Every transaction is recorded twice, as a debit in one account and a credit in another, for the same amount.",
        "tag": "Definition"
      },
      {
        "front": "Which items increase on the debit side?",
        "back": "Drawings, Expenses, Assets (DEA).",
        "tag": "Rule"
      },
      {
        "front": "Which items increase on the credit side?",
        "back": "Liabilities, Income, Capital (LIC).",
        "tag": "Rule"
      },
      {
        "front": "Pay rent by bank. Debit? Credit?",
        "back": "Debit Rent. Credit Bank.",
        "tag": "Double entry"
      },
      {
        "front": "Sell goods on credit to Omar. Debit? Credit?",
        "back": "Debit Omar. Credit Sales.",
        "tag": "Double entry"
      },
      {
        "front": "Buy goods for resale on credit from Hadi. Debit? Credit?",
        "back": "Debit Purchases. Credit Hadi.",
        "tag": "Double entry"
      },
      {
        "front": "Owner takes goods for own use. Debit? Credit?",
        "back": "Debit Drawings. Credit Purchases.",
        "tag": "Double entry"
      },
      {
        "front": "Customer returns goods. Debit? Credit?",
        "back": "Debit Sales returns. Credit the customer.",
        "tag": "Double entry"
      },
      {
        "front": "What goes in the details column of an account?",
        "back": "The name of the other account in the double entry."
      },
      {
        "front": "Where does \"Balance c/d\" go?",
        "back": "On the smaller side, so both sides total the same. It comes down as \"Balance b/d\" on the other side."
      },
      {
        "front": "A credit balance on the Bank account means?",
        "back": "The business has a bank overdraft."
      },
      {
        "front": "What does the sales ledger contain?",
        "back": "The personal accounts of credit customers (trade receivables)."
      },
      {
        "front": "What does the nominal (general) ledger contain?",
        "back": "All accounts not in the sales or purchases ledger: income, expenses, assets, liabilities, capital and drawings."
      },
      {
        "front": "What is a three-column (running balance) account?",
        "back": "An account with Debit, Credit and Balance columns. The balance is updated after every entry."
      }
    ]
  },
  "2.2": {
    "mindMap": {
      "centre": "Business documents",
      "branches": [
        {
          "label": "Selling on credit",
          "items": [
            "Invoice: seller to buyer",
            "Shows price, trade discount, amount due",
            "Statement of account: monthly summary"
          ]
        },
        {
          "label": "Returns and corrections",
          "items": [
            "Debit note: buyer asks for credit",
            "Credit note: seller confirms reduction",
            "Recorded in the returns journals"
          ]
        },
        {
          "label": "Money in and out",
          "items": [
            "Receipt: proof money received",
            "Cheque counterfoil: payer's record",
            "Paying-in slip: money paid into bank"
          ]
        },
        {
          "label": "Checking documents",
          "items": [
            "Bank statement: used for bank reconciliation",
            "Statement of account: customer checks it",
            "Not books of prime entry"
          ]
        },
        {
          "label": "Manual and digital",
          "items": [
            "Invoices emailed from software",
            "Online payments replace cheques",
            "Can be imported into the books",
            "Must be stored safely"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Who prepares an invoice, and who receives it?",
        "back": "The seller prepares it and sends it to the buyer."
      },
      {
        "front": "What does an invoice show?",
        "back": "The goods sold on credit, the price, any trade discount and the amount due."
      },
      {
        "front": "Who sends a debit note, and why?",
        "back": "The buyer, to ask the seller for a credit, for example for returned or overcharged goods."
      },
      {
        "front": "Who sends a credit note, and why?",
        "back": "The seller, to confirm that the amount the buyer owes has been reduced."
      },
      {
        "front": "Is trade discount recorded in the books?",
        "back": "No. Record the amount after trade discount."
      },
      {
        "front": "Goods $600 less 10% trade discount. Amount recorded?",
        "back": "600 minus 60 = $540",
        "tag": "Calculation"
      },
      {
        "front": "What is a cheque counterfoil?",
        "back": "The stub kept in the cheque book by the payer, showing date, payee and amount."
      },
      {
        "front": "What is a paying-in slip used for?",
        "back": "To pay cash and cheques into the bank. The business keeps a copy as evidence."
      },
      {
        "front": "What is a receipt?",
        "back": "Proof that money has been received, given to the person who paid."
      },
      {
        "front": "What is a statement of account?",
        "back": "A summary sent by the seller to a credit customer showing purchases, returns, payments and the balance owed."
      },
      {
        "front": "What is a bank statement used for?",
        "back": "Checking the cash book. It is used for bank reconciliation."
      },
      {
        "front": "Which document does the seller record in the sales returns journal?",
        "back": "Its copy of the credit note it sent."
      },
      {
        "front": "Which document does the buyer record in the purchases journal?",
        "back": "The invoice received from the supplier."
      },
      {
        "front": "Name one benefit of digital documents.",
        "back": "Any one: faster to send, can be entered into the books automatically, fewer copying errors, easy to search."
      }
    ]
  },
  "2.3": {
    "mindMap": {
      "centre": "Books of prime entry",
      "branches": [
        {
          "label": "The journals",
          "items": [
            "Sales and purchases journals: credit goods only",
            "Returns journals: credit notes",
            "Post totals to the ledger"
          ]
        },
        {
          "label": "Cash book",
          "items": [
            "Cash and bank columns",
            "Book of prime entry and ledger account",
            "Contra entry marked (C)"
          ]
        },
        {
          "label": "Discounts",
          "items": [
            "Trade discount: never recorded",
            "Cash discount: only if paid early",
            "Discount allowed: expense",
            "Discount received: income"
          ]
        },
        {
          "label": "General journal",
          "items": [
            "Non-current assets on credit",
            "Corrections and write-offs",
            "Always add a narrative"
          ]
        },
        {
          "label": "Petty cash",
          "items": [
            "Imprest: fixed float",
            "Reimburse exactly what was spent",
            "Analysis columns to expense accounts"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a book of prime entry?",
        "back": "The book where a transaction is first recorded from its source document, before posting to the ledger.",
        "tag": "Definition"
      },
      {
        "front": "What goes in the sales journal?",
        "back": "Credit sales of goods only. Cash sales go in the cash book."
      },
      {
        "front": "Posting the sales journal: what is debited and credited?",
        "back": "Each customer is debited with their amount. The total is credited to the Sales account."
      },
      {
        "front": "Posting the purchases journal: what is debited and credited?",
        "back": "The total is debited to Purchases. Each supplier is credited."
      },
      {
        "front": "Why is the cash book also a ledger account?",
        "back": "It holds the Cash and Bank accounts, so their balances are not copied anywhere else."
      },
      {
        "front": "A customer pays by credit card. Which cash book column?",
        "back": "The bank column, because the money goes into the business bank account."
      },
      {
        "front": "What is a contra entry?",
        "back": "A transaction with both sides in the cash book, such as paying cash into the bank. Marked (C)."
      },
      {
        "front": "Are the discount columns of the cash book balanced?",
        "back": "No. They are totalled and posted to the Discount allowed and Discount received accounts."
      },
      {
        "front": "Is discount allowed income or an expense?",
        "back": "An expense."
      },
      {
        "front": "Is discount received income or an expense?",
        "back": "Income."
      },
      {
        "front": "Omar settles a $500 debt by paying $490. How is his account cleared?",
        "back": "Credit Omar with $490 bank and $10 discount allowed."
      },
      {
        "front": "Name two uses of the general journal.",
        "back": "Any two: non-current assets bought or sold on credit, correcting errors, writing off irrecoverable debts, year-end transfers, goods taken by the owner, opening entries."
      },
      {
        "front": "What is the imprest system?",
        "back": "Petty cash starts each period with a fixed float. At the end, the exact amount spent is reimbursed to restore the float.",
        "tag": "Definition"
      },
      {
        "front": "Float $200, spent $168. How much is reimbursed?",
        "back": "$168, which brings petty cash back to $200.",
        "tag": "Calculation"
      },
      {
        "front": "One risk of keeping cash on the premises.",
        "back": "Any one: theft or loss, needs a safe and insurance, earns no interest, errors and fraud are harder to trace."
      }
    ]
  },
  "3.1": {
    "mindMap": {
      "centre": "The trial balance",
      "branches": [
        {
          "label": "What it is",
          "items": [
            "List of all ledger balances at one date",
            "Debit column and credit column",
            "Totals should agree"
          ]
        },
        {
          "label": "Purposes",
          "items": [
            "Checks arithmetic of double entry",
            "Summary of all balances",
            "Starting point for financial statements"
          ]
        },
        {
          "label": "Which column",
          "items": [
            "Debit: drawings, expenses, assets",
            "Credit: liabilities, income, capital",
            "Opening inventory: debit",
            "Closing inventory: not in the trial balance"
          ]
        },
        {
          "label": "Errors not revealed",
          "items": [
            "Omission, commission, principle",
            "Original entry, complete reversal",
            "Compensating errors"
          ]
        },
        {
          "label": "Errors that are revealed",
          "items": [
            "Only one side entered",
            "Different amounts on each side",
            "Casting errors, balance left out",
            "Difference goes to suspense"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a trial balance?",
        "back": "A list of all the ledger balances at a certain date, in a debit column and a credit column.",
        "tag": "Definition"
      },
      {
        "front": "Main purpose of a trial balance?",
        "back": "To check the arithmetical accuracy of the double entry."
      },
      {
        "front": "Main limitation of a trial balance?",
        "back": "It can balance even when the books contain errors."
      },
      {
        "front": "Which column for sales returns?",
        "back": "Debit. Sales returns reduce income."
      },
      {
        "front": "Which column for discount received?",
        "back": "Credit. It is income."
      },
      {
        "front": "Is closing inventory in the trial balance?",
        "back": "No. Only opening inventory is. Closing inventory is given as a note."
      },
      {
        "front": "Error of omission?",
        "back": "The transaction is left out completely.",
        "tag": "Error type"
      },
      {
        "front": "Error of commission?",
        "back": "Right type of account, wrong person's account. Example: sale to Lina debited to Lena.",
        "tag": "Error type"
      },
      {
        "front": "Error of principle?",
        "back": "Wrong type of account. Example: van repairs debited to Motor vehicles.",
        "tag": "Error type"
      },
      {
        "front": "Error of original entry?",
        "back": "The wrong amount is used for both the debit and the credit.",
        "tag": "Error type"
      },
      {
        "front": "Complete reversal of entries?",
        "back": "Right accounts, but debit and credit swapped.",
        "tag": "Error type"
      },
      {
        "front": "Compensating error?",
        "back": "Two separate errors that cancel each other out.",
        "tag": "Error type"
      },
      {
        "front": "Memory aid for the six errors?",
        "back": "CC ROOP: Commission, Compensating, Reversal, Omission, Original entry, Principle."
      },
      {
        "front": "What happens when the totals disagree?",
        "back": "The difference is put in a suspense account until the errors are found."
      }
    ]
  },
  "3.2": {
    "mindMap": {
      "centre": "Correction of errors",
      "branches": [
        {
          "label": "Method",
          "items": [
            "What was entered?",
            "What should have been entered?",
            "Journal entry to fix the gap"
          ]
        },
        {
          "label": "Six errors",
          "items": [
            "No suspense account needed",
            "Complete reversal: double the amount",
            "Every entry needs a narrative"
          ]
        },
        {
          "label": "Suspense account",
          "items": [
            "Holds the trial balance difference",
            "Debit side short: debit balance",
            "Cleared when all errors are found"
          ]
        },
        {
          "label": "Effect on profit",
          "items": [
            "More expense or less income: profit down",
            "Less expense or more income: profit up",
            "Between two asset or liability accounts: no change"
          ]
        },
        {
          "label": "Statement of financial position",
          "items": [
            "Assets or liabilities corrected",
            "Capital changes with profit",
            "Suspense balance disappears"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Three questions to correct any error?",
        "back": "What was entered? What should have been entered? What entry turns one into the other?",
        "tag": "Method"
      },
      {
        "front": "Credit sale of $300 to Lina not recorded. Correction?",
        "back": "Dr Lina 300, Cr Sales 300.",
        "tag": "Journal"
      },
      {
        "front": "$300 sale to Lina debited to Lena. Correction?",
        "back": "Dr Lina 300, Cr Lena 300.",
        "tag": "Journal"
      },
      {
        "front": "Van repairs $200 debited to Motor vehicles. Correction?",
        "back": "Dr Motor expenses 200, Cr Motor vehicles 200.",
        "tag": "Journal"
      },
      {
        "front": "Cash sales $90: Sales debited, Cash credited. Correction?",
        "back": "Dr Cash 180, Cr Sales 180. Double the amount: once to cancel, once to correct.",
        "tag": "Journal"
      },
      {
        "front": "Do the six \"hidden\" errors use the suspense account?",
        "back": "No. Their debits and credits were already equal."
      },
      {
        "front": "Debit total is $180 less than credit total. Suspense balance?",
        "back": "A debit balance of $180."
      },
      {
        "front": "Wages $1,250 posted to Wages as $1,130. Correction?",
        "back": "Dr Wages 120, Cr Suspense 120.",
        "tag": "Journal"
      },
      {
        "front": "Discount allowed $60 missed from the Discount allowed account. Correction?",
        "back": "Dr Discount allowed 60, Cr Suspense 60.",
        "tag": "Journal"
      },
      {
        "front": "Effect on profit of an extra expense found?",
        "back": "Profit goes down by that amount."
      },
      {
        "front": "Effect on profit of correcting Lina and Lena's accounts?",
        "back": "None. Both are receivables, so profit does not change."
      },
      {
        "front": "Van repairs wrongly capitalised. Effect on profit and assets?",
        "back": "Profit was overstated and non-current assets were overstated by the same amount."
      },
      {
        "front": "When is the suspense account finished with?",
        "back": "When all errors are corrected and it has no balance left."
      }
    ]
  },
  "3.3": {
    "mindMap": {
      "centre": "Bank reconciliation",
      "branches": [
        {
          "label": "Step 1: update the cash book",
          "items": [
            "Bank charges and interest",
            "Standing orders and direct debits",
            "Credit transfers received",
            "Dishonoured cheques, cash book errors"
          ]
        },
        {
          "label": "Step 2: reconciliation statement",
          "items": [
            "Unpresented cheques",
            "Amounts not yet credited",
            "Bank errors"
          ]
        },
        {
          "label": "Starting from the bank statement",
          "items": [
            "Add amounts not yet credited",
            "Less unpresented cheques",
            "Ends at updated cash book balance"
          ]
        },
        {
          "label": "Watch the sides",
          "items": [
            "Money in bank: debit in cash book",
            "Same balance: credit on bank statement",
            "Overdraft is the opposite"
          ]
        },
        {
          "label": "Why reconcile",
          "items": [
            "Finds errors on both sides",
            "Updates the cash book",
            "Spots fraud and old cheques",
            "Digital banking: reconcile more often"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a bank reconciliation statement?",
        "back": "A statement explaining why the cash book bank balance and the bank statement balance are different.",
        "tag": "Definition"
      },
      {
        "front": "What is an unpresented cheque?",
        "back": "A cheque paid out and recorded in the cash book that has not yet reached the bank.",
        "tag": "Definition"
      },
      {
        "front": "What is an amount not yet credited?",
        "back": "Money paid into the bank and recorded in the cash book that is not yet on the bank statement.",
        "tag": "Definition"
      },
      {
        "front": "What is a standing order?",
        "back": "An instruction to the bank to pay a fixed amount at regular times.",
        "tag": "Definition"
      },
      {
        "front": "What is a direct debit?",
        "back": "Permission for a supplier to take money from the account. The amount can change.",
        "tag": "Definition"
      },
      {
        "front": "What is a dishonoured cheque?",
        "back": "A cheque received that the payer's bank refused to pay.",
        "tag": "Definition"
      },
      {
        "front": "Bank charges on the statement only. Where do they go?",
        "back": "Update the cash book (credit the bank column)."
      },
      {
        "front": "Credit transfer from a customer on the statement only. Where?",
        "back": "Update the cash book (debit the bank column)."
      },
      {
        "front": "Unpresented cheques. Where do they go?",
        "back": "In the bank reconciliation statement, not the cash book."
      },
      {
        "front": "Starting from the bank statement balance, unpresented cheques are...",
        "back": "Deducted."
      },
      {
        "front": "Starting from the bank statement balance, amounts not yet credited are...",
        "back": "Added."
      },
      {
        "front": "Statement $2,790, not yet credited $450, unpresented $525. Cash book balance?",
        "back": "2,790 + 450 minus 525 = $2,715",
        "tag": "Calculation"
      },
      {
        "front": "The bank makes an error. Is the cash book changed?",
        "back": "No. Show it in the reconciliation and ask the bank to correct it."
      },
      {
        "front": "An overdraft appears on the bank statement as a...",
        "back": "Debit balance (it is a credit balance in the cash book)."
      }
    ]
  },
  "3.4": {
    "mindMap": {
      "centre": "Control accounts",
      "branches": [
        {
          "label": "Purpose",
          "items": [
            "Summary of a whole ledger",
            "Balance should equal total of the accounts",
            "Narrows down where an error is",
            "Quick totals, helps prevent fraud"
          ]
        },
        {
          "label": "Sales ledger control",
          "items": [
            "Debit: credit sales, dishonoured cheques",
            "Debit: interest charged, refunds paid",
            "Credit: receipts, discount allowed, returns",
            "Credit: irrecoverable debts, contra"
          ]
        },
        {
          "label": "Purchases ledger control",
          "items": [
            "Credit: credit purchases, interest charged",
            "Debit: payments, discount received",
            "Debit: purchases returns, contra"
          ]
        },
        {
          "label": "Sources",
          "items": [
            "Journal totals for sales, purchases, returns",
            "Cash book for money and discounts",
            "General journal for write-offs and contras"
          ]
        },
        {
          "label": "Watch out",
          "items": [
            "No cash sales or cash purchases",
            "Contra affects both control accounts",
            "Digital systems update it automatically"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a control account?",
        "back": "A summary account that records the totals of all the transactions in one ledger.",
        "tag": "Definition"
      },
      {
        "front": "Balance of the sales ledger control account equals?",
        "back": "Total trade receivables."
      },
      {
        "front": "Give two purposes of control accounts.",
        "back": "Any two: check the ledger is accurate, narrow down where errors are, give quick totals, help prevent fraud."
      },
      {
        "front": "Source of the credit sales figure?",
        "back": "The sales journal total."
      },
      {
        "front": "Source of discount allowed and discount received?",
        "back": "The discount columns of the cash book."
      },
      {
        "front": "Dishonoured cheque: which side of the sales ledger control account?",
        "back": "Debit. The customer owes the money again."
      },
      {
        "front": "Irrecoverable debt written off: which side?",
        "back": "Credit of the sales ledger control account."
      },
      {
        "front": "Interest charged on an overdue customer account: which side?",
        "back": "Debit. It increases what the customer owes."
      },
      {
        "front": "What is a contra entry?",
        "back": "Setting off what a firm owes us against what we owe the same firm.",
        "tag": "Definition"
      },
      {
        "front": "Contra entry in the control accounts?",
        "back": "Credit sales ledger control, debit purchases ledger control.",
        "tag": "Double entry"
      },
      {
        "front": "Discount received goes in which control account, which side?",
        "back": "Purchases ledger control account, debit side."
      },
      {
        "front": "Are cash sales included in a control account?",
        "back": "No. Only credit transactions."
      },
      {
        "front": "Refund paid to a customer with a credit balance: which side?",
        "back": "Debit of the sales ledger control account."
      },
      {
        "front": "Why is a control account less useful for finding errors in digital systems?",
        "back": "The software updates both the control account and the individual accounts from the same entry, so they normally agree."
      }
    ]
  },
  "4.1": {
    "mindMap": {
      "centre": "Capital and revenue",
      "branches": [
        {
          "label": "Capital expenditure",
          "items": [
            "Buying or improving non-current assets",
            "Benefit lasts more than one year",
            "Shown as an asset"
          ]
        },
        {
          "label": "Part of asset cost",
          "items": [
            "Purchase price",
            "Delivery and installation",
            "Legal fees, testing"
          ]
        },
        {
          "label": "Revenue expenditure",
          "items": [
            "Day-to-day running costs",
            "Wages, rent, fuel, insurance",
            "Ordinary repairs"
          ]
        },
        {
          "label": "Receipts",
          "items": [
            "Capital: capital introduced, loans",
            "Capital: selling a non-current asset",
            "Revenue: sales, rent and commission received"
          ]
        },
        {
          "label": "Wrong treatment",
          "items": [
            "Capital as revenue: profit and assets understated",
            "Revenue as capital: profit and assets overstated"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is capital expenditure?",
        "back": "Spending on buying non-current assets, or improving them so they are worth more or last longer.",
        "tag": "Definition"
      },
      {
        "front": "What is revenue expenditure?",
        "back": "Spending on the day-to-day running of the business, including keeping assets in working order.",
        "tag": "Definition"
      },
      {
        "front": "Where is capital expenditure shown?",
        "back": "As a non-current asset in the statement of financial position."
      },
      {
        "front": "Where is revenue expenditure shown?",
        "back": "As an expense in the statement of profit or loss."
      },
      {
        "front": "Is delivery of a new machine capital or revenue?",
        "back": "Capital. It is part of getting the asset ready to use."
      },
      {
        "front": "Machine $18,000 + delivery $400 + installation $600 + insurance $300. Cost of the machine?",
        "back": "18,000 + 400 + 600 = $19,000. The insurance is revenue expenditure.",
        "tag": "Calculation"
      },
      {
        "front": "Repairing a roof: capital or revenue?",
        "back": "Revenue. It keeps the building as it was."
      },
      {
        "front": "Adding an extra floor: capital or revenue?",
        "back": "Capital. It improves the building."
      },
      {
        "front": "Give two capital receipts.",
        "back": "Any two: capital introduced, a bank loan, money from selling a non-current asset."
      },
      {
        "front": "Give two revenue receipts.",
        "back": "Any two: sales, rent received, commission received, discount received, interest received."
      },
      {
        "front": "A $5,000 computer recorded as office expenses. Effect?",
        "back": "Profit understated and non-current assets understated."
      },
      {
        "front": "$800 repairs added to the Machinery account. Effect?",
        "back": "Profit overstated by $800 and non-current assets overstated by $800."
      },
      {
        "front": "Selling a non-current asset: what goes to profit or loss?",
        "back": "Only the profit or loss on disposal, not the money received."
      }
    ]
  },
  "4.2": {
    "mindMap": {
      "centre": "Depreciation and disposal",
      "branches": [
        {
          "label": "Why depreciate",
          "items": [
            "Spread cost over useful life (matching)",
            "Correct profit",
            "Realistic asset values",
            "No cash is paid"
          ]
        },
        {
          "label": "Causes",
          "items": [
            "Wear and tear",
            "Time passing",
            "Obsolescence",
            "Depletion"
          ]
        },
        {
          "label": "Methods",
          "items": [
            "Straight-line: (cost minus residual) / years",
            "Reducing balance: % of carrying value",
            "Revaluation: opening + bought minus closing"
          ]
        },
        {
          "label": "Recording",
          "items": [
            "Dr Depreciation, Cr Provision for depreciation",
            "Asset account stays at cost",
            "Carrying value = cost minus accumulated depreciation"
          ]
        },
        {
          "label": "Disposal account",
          "items": [
            "Dr Disposal with cost",
            "Cr Disposal with accumulated depreciation",
            "Cr Disposal with money received",
            "Balance is profit or loss on disposal"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is depreciation?",
        "back": "The part of a non-current asset's cost used up in a year, charged as an expense.",
        "tag": "Definition"
      },
      {
        "front": "Name three causes of depreciation.",
        "back": "Any three: wear and tear, time, obsolescence, depletion."
      },
      {
        "front": "Straight-line formula?",
        "back": "(Cost minus Residual value) divided by Useful life in years",
        "tag": "Formula"
      },
      {
        "front": "Cost $20,000, residual $2,000, life 6 years. Yearly straight-line depreciation?",
        "back": "(20,000 minus 2,000) / 6 = $3,000",
        "tag": "Calculation"
      },
      {
        "front": "How is reducing balance worked out?",
        "back": "A fixed percentage of the carrying value at the start of each year. Residual value is ignored."
      },
      {
        "front": "$20,000 at 25% reducing balance. Year 2 depreciation?",
        "back": "Year 1: 5,000, carrying value 15,000. Year 2: 25% x 15,000 = $3,750.",
        "tag": "Calculation"
      },
      {
        "front": "Revaluation method formula?",
        "back": "Opening valuation + Purchases minus Closing valuation",
        "tag": "Formula"
      },
      {
        "front": "Tools $1,800 + bought $600, valued at $1,500. Depreciation?",
        "back": "1,800 + 600 minus 1,500 = $900",
        "tag": "Calculation"
      },
      {
        "front": "Which method suits motor vehicles and computers?",
        "back": "Reducing balance, because they lose more value early on."
      },
      {
        "front": "Journal entry for yearly depreciation?",
        "back": "Dr Depreciation (expense), Cr Provision for depreciation.",
        "tag": "Journal"
      },
      {
        "front": "What is carrying value?",
        "back": "Cost minus accumulated depreciation.",
        "tag": "Definition"
      },
      {
        "front": "Van cost $16,000, accumulated depreciation $7,000, sold for $8,500. Profit or loss?",
        "back": "Carrying value 9,000. Sold for 8,500, so a loss of $500.",
        "tag": "Calculation"
      },
      {
        "front": "A loss on disposal is shown as?",
        "back": "An expense in the statement of profit or loss."
      },
      {
        "front": "Which concept means using the same depreciation method each year?",
        "back": "Consistency."
      }
    ]
  },
  "4.3": {
    "mindMap": {
      "centre": "Accruals and prepayments",
      "branches": [
        {
          "label": "The idea",
          "items": [
            "Charge what belongs to the year",
            "Not what was paid or received",
            "Matching (accruals) concept"
          ]
        },
        {
          "label": "Accrued expense",
          "items": [
            "Used but not yet paid",
            "Add to the expense",
            "Other payable (current liability)"
          ]
        },
        {
          "label": "Prepaid expense",
          "items": [
            "Paid now for next year",
            "Deduct from the expense",
            "Other receivable (current asset)"
          ]
        },
        {
          "label": "Income adjustments",
          "items": [
            "Accrued income: add, other receivable",
            "Received in advance: deduct, other payable"
          ]
        },
        {
          "label": "Opening balances",
          "items": [
            "Remove last year's accrual from payments",
            "Add last year's prepayment",
            "Then adjust for this year's closing items"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the matching (accruals) concept?",
        "back": "Income and expenses are recorded in the period they belong to, not when cash is paid or received.",
        "tag": "Concept"
      },
      {
        "front": "What is an accrued expense?",
        "back": "An expense used in the year but not yet paid.",
        "tag": "Definition"
      },
      {
        "front": "Where is an accrued expense shown?",
        "back": "Added to the expense, and shown as an other payable in current liabilities."
      },
      {
        "front": "What is a prepaid expense?",
        "back": "An expense paid this year that belongs to next year.",
        "tag": "Definition"
      },
      {
        "front": "Where is a prepaid expense shown?",
        "back": "Deducted from the expense, and shown as an other receivable in current assets."
      },
      {
        "front": "Rent $500 a month, $5,000 paid. Accrual and expense?",
        "back": "Expense 6,000. Accrual 6,000 minus 5,000 = $1,000.",
        "tag": "Calculation"
      },
      {
        "front": "Insurance $1,200 paid 1 April for 12 months. Year ends 31 December. Expense and prepayment?",
        "back": "Expense 1,200 x 9/12 = $900. Prepayment $300.",
        "tag": "Calculation"
      },
      {
        "front": "What is income received in advance?",
        "back": "Income received this year that belongs to next year. It is an other payable."
      },
      {
        "front": "What is accrued income?",
        "back": "Income earned in the year but not yet received. It is an other receivable."
      },
      {
        "front": "Rent receivable $3,600 for the year, $4,200 received. Adjustment?",
        "back": "$600 received in advance (other payable). Income is $3,600.",
        "tag": "Calculation"
      },
      {
        "front": "Journal entry for rent owing $1,000?",
        "back": "Dr Rent 1,000, Cr Other payables 1,000.",
        "tag": "Journal"
      },
      {
        "front": "Electricity: $150 owing at start, $2,100 paid, $200 owing at end. Expense?",
        "back": "2,100 minus 150 + 200 = $2,150",
        "tag": "Calculation"
      },
      {
        "front": "Accrued expense balance in the ledger: debit or credit?",
        "back": "Credit balance brought down."
      }
    ]
  },
  "4.4": {
    "mindMap": {
      "centre": "Irrecoverable debts",
      "branches": [
        {
          "label": "Writing off",
          "items": [
            "Debt will never be paid",
            "Dr Irrecoverable debts, Cr customer",
            "Expense in profit or loss"
          ]
        },
        {
          "label": "Recovered debts",
          "items": [
            "Reinstate: Dr customer, Cr Irrecoverable debts recovered",
            "Then Dr Bank, Cr customer",
            "Recovered amount is income"
          ]
        },
        {
          "label": "Allowance",
          "items": [
            "Estimate of debts that may not be paid",
            "Prudence concept",
            "No customer account is changed"
          ]
        },
        {
          "label": "Changing the allowance",
          "items": [
            "Only the change goes to profit or loss",
            "Increase: expense",
            "Decrease: income"
          ]
        },
        {
          "label": "Order and presentation",
          "items": [
            "Write off irrecoverable debts first",
            "Then calculate the allowance",
            "Receivables less allowance on the statement of financial position"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is an irrecoverable debt?",
        "back": "A debt the business is sure will never be paid.",
        "tag": "Definition"
      },
      {
        "front": "Journal to write off Zain's $400 debt?",
        "back": "Dr Irrecoverable debts 400, Cr Zain 400.",
        "tag": "Journal"
      },
      {
        "front": "Is an irrecoverable debt an expense or income?",
        "back": "An expense."
      },
      {
        "front": "Zain later pays the $400 written off. Two journal entries?",
        "back": "Dr Zain, Cr Irrecoverable debts recovered 400.\nThen Dr Bank, Cr Zain 400.",
        "tag": "Journal"
      },
      {
        "front": "Why reinstate the debt before recording the payment?",
        "back": "So the customer's account shows he paid, which helps if he wants credit again."
      },
      {
        "front": "What is the allowance for irrecoverable debts?",
        "back": "An estimate of trade receivables that may not be collected.",
        "tag": "Definition"
      },
      {
        "front": "Which concept requires the allowance?",
        "back": "Prudence."
      },
      {
        "front": "Allowance goes from $800 to $1,000. Effect on profit?",
        "back": "$200 increase, charged as an expense."
      },
      {
        "front": "Allowance goes from $1,000 to $700. Effect on profit?",
        "back": "$300 decrease, treated as income."
      },
      {
        "front": "Receivables $20,000, allowance 5%. Statement of financial position?",
        "back": "Trade receivables 20,000 less allowance 1,000 = $19,000.",
        "tag": "Calculation"
      },
      {
        "front": "Which comes first: writing off debts or calculating the allowance?",
        "back": "Write off irrecoverable debts first, then calculate the allowance."
      },
      {
        "front": "Is any customer's account changed when the allowance is created?",
        "back": "No. The allowance has its own account."
      }
    ]
  },
  "4.5": {
    "mindMap": {
      "centre": "Valuation of inventory",
      "branches": [
        {
          "label": "The rule",
          "items": [
            "Lower of cost and net realisable value",
            "Apply item by item",
            "Never value above cost"
          ]
        },
        {
          "label": "Cost",
          "items": [
            "Purchase price",
            "Carriage inwards",
            "Costs to bring goods to present condition"
          ]
        },
        {
          "label": "Net realisable value",
          "items": [
            "Expected selling price",
            "Less costs to complete and sell",
            "Used for damaged or out-of-date goods"
          ]
        },
        {
          "label": "Concepts",
          "items": [
            "Prudence: recognise expected losses",
            "Realisation: no profit until sold"
          ]
        },
        {
          "label": "Effect of errors",
          "items": [
            "Closing inventory overstated: profit overstated",
            "Current assets and capital overstated too",
            "Next year's profit understated"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How is inventory valued?",
        "back": "At the lower of cost and net realisable value.",
        "tag": "Rule"
      },
      {
        "front": "What is net realisable value?",
        "back": "Expected selling price minus any costs needed to complete and sell the goods.",
        "tag": "Definition"
      },
      {
        "front": "Is carriage inwards part of inventory cost?",
        "back": "Yes."
      },
      {
        "front": "Cost $300, selling price $320, repairs needed $50. Value?",
        "back": "NRV = 320 minus 50 = 270. Lower of 300 and 270 = $270.",
        "tag": "Calculation"
      },
      {
        "front": "Cost $400, NRV $550. Value?",
        "back": "$400 (cost is lower).",
        "tag": "Calculation"
      },
      {
        "front": "Should cost and NRV be compared for the total or each item?",
        "back": "Each item (or group of items) separately."
      },
      {
        "front": "Which concept says expected losses on inventory are recognised now?",
        "back": "Prudence."
      },
      {
        "front": "Which concept stops inventory being valued at selling price?",
        "back": "Realisation. Profit is only recognised when goods are sold."
      },
      {
        "front": "Cost of sales formula?",
        "back": "Opening inventory + Purchases minus Closing inventory",
        "tag": "Formula"
      },
      {
        "front": "Closing inventory overstated by $800. Effect on gross profit?",
        "back": "Gross profit overstated by $800."
      },
      {
        "front": "Closing inventory overstated. Effect on current assets and capital?",
        "back": "Both overstated by the same amount."
      },
      {
        "front": "This year's closing inventory overstated. Effect on next year's profit?",
        "back": "Next year's profit is understated, because opening inventory is too high."
      },
      {
        "front": "Goods sold but waiting for collection. Include in inventory?",
        "back": "No. They belong to the customer."
      }
    ]
  },
  "5.1": {
    "mindMap": {
      "centre": "Sole trader statements",
      "branches": [
        {
          "label": "Sole trader",
          "items": [
            "One owner, unlimited liability",
            "Owner keeps all profit and makes decisions",
            "Hard to raise capital"
          ]
        },
        {
          "label": "Statement of profit or loss",
          "items": [
            "Revenue minus cost of sales = gross profit",
            "Add other income",
            "Less expenses = profit for the year"
          ]
        },
        {
          "label": "Cost of sales",
          "items": [
            "Opening inventory + purchases",
            "Plus carriage inwards",
            "Less closing inventory"
          ]
        },
        {
          "label": "Statement of financial position",
          "items": [
            "Non-current and current assets",
            "Capital: opening + profit minus drawings",
            "Non-current and current liabilities"
          ]
        },
        {
          "label": "Adjustments",
          "items": [
            "Each one changes both statements",
            "Accruals, prepayments, depreciation",
            "Irrecoverable debts and allowance",
            "Goods taken: Dr Drawings, Cr Purchases"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a sole trader?",
        "back": "A business owned by one person, who may employ staff.",
        "tag": "Definition"
      },
      {
        "front": "Main disadvantage of being a sole trader?",
        "back": "Unlimited liability: the owner's personal possessions can be used to pay business debts."
      },
      {
        "front": "Formula for revenue?",
        "back": "Sales minus sales returns.",
        "tag": "Formula"
      },
      {
        "front": "Formula for cost of sales?",
        "back": "Opening inventory + Purchases (less returns) + Carriage inwards minus Closing inventory",
        "tag": "Formula"
      },
      {
        "front": "Gross profit formula?",
        "back": "Revenue minus Cost of sales",
        "tag": "Formula"
      },
      {
        "front": "Carriage inwards or carriage outwards: which is in cost of sales?",
        "back": "Carriage inwards. Carriage outwards is an expense."
      },
      {
        "front": "Closing capital formula for a sole trader?",
        "back": "Opening capital + Capital introduced + Profit minus Drawings",
        "tag": "Formula"
      },
      {
        "front": "What makes a liability \"current\"?",
        "back": "It is due within 12 months."
      },
      {
        "front": "Owner takes goods for own use. Journal entry?",
        "back": "Dr Drawings, Cr Purchases (at cost).",
        "tag": "Journal"
      },
      {
        "front": "Owner's home electricity paid by the business. Journal entry?",
        "back": "Dr Drawings, Cr Electricity (expense account).",
        "tag": "Journal"
      },
      {
        "front": "Wages owing $300. Effect on the two statements?",
        "back": "Wages expense up $300 (profit down). Other payables up $300."
      },
      {
        "front": "Rent prepaid $200. Effect on the two statements?",
        "back": "Rent expense down $200 (profit up). Other receivables up $200."
      },
      {
        "front": "How does a service business statement differ?",
        "back": "No cost of sales and no gross profit. Income less expenses gives profit."
      },
      {
        "front": "Where does a loan repayable in five years go?",
        "back": "Non-current liabilities."
      }
    ]
  },
  "5.2": {
    "mindMap": {
      "centre": "Partnerships",
      "branches": [
        {
          "label": "Partnership",
          "items": [
            "Two or more owners sharing profit",
            "More capital and skills",
            "Unlimited liability, disagreements"
          ]
        },
        {
          "label": "Agreement covers",
          "items": [
            "Capital each partner puts in",
            "Profit sharing ratio",
            "Interest on capital and drawings",
            "Salaries and loan interest"
          ]
        },
        {
          "label": "Statement of profit or loss",
          "items": [
            "Interest on a partner's loan is an expense",
            "Profit for the year then goes to appropriation"
          ]
        },
        {
          "label": "Appropriation account",
          "items": [
            "Add interest on drawings",
            "Less salaries and interest on capital",
            "Share the rest in the profit sharing ratio"
          ]
        },
        {
          "label": "Partners' accounts",
          "items": [
            "Capital account: fixed, rarely changes",
            "Current account: profit share less drawings",
            "Debit current balance shown as negative"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a partnership?",
        "back": "A business owned by two or more people who share the profits.",
        "tag": "Definition"
      },
      {
        "front": "Give three things a partnership agreement covers.",
        "back": "Any three: capital, profit sharing ratio, interest on capital, interest on drawings, salaries, loan interest, drawings limits, what happens if a partner leaves."
      },
      {
        "front": "Where does interest on a partner's loan go?",
        "back": "The statement of profit or loss, as an expense."
      },
      {
        "front": "Where does interest on capital go?",
        "back": "The appropriation account."
      },
      {
        "front": "Is a partner's salary an expense?",
        "back": "No. It is an appropriation of profit."
      },
      {
        "front": "Is interest on drawings added or deducted in the appropriation account?",
        "back": "Added. Partners pay it to the business."
      },
      {
        "front": "Why charge interest on drawings?",
        "back": "To discourage partners from taking too much out."
      },
      {
        "front": "Capital $40,000 at 5% interest. Interest on capital?",
        "back": "5% x 40,000 = $2,000",
        "tag": "Calculation"
      },
      {
        "front": "$37,500 left to share in the ratio 3 : 2. Each share?",
        "back": "3/5 = $22,500 and 2/5 = $15,000.",
        "tag": "Calculation"
      },
      {
        "front": "Capital account vs current account?",
        "back": "Capital account holds the fixed capital. Current account holds yearly profit shares, salaries and interest, less drawings."
      },
      {
        "front": "Which side of the current account for share of profit?",
        "back": "Credit."
      },
      {
        "front": "Which side of the current account for drawings and interest on drawings?",
        "back": "Debit."
      },
      {
        "front": "What does a debit balance on a current account mean?",
        "back": "The partner has taken out more than their share of profit."
      }
    ]
  },
  "5.3": {
    "mindMap": {
      "centre": "Limited companies",
      "branches": [
        {
          "label": "Features",
          "items": [
            "Owned by shareholders, run by directors",
            "Separate legal person",
            "Limited liability",
            "Must publish accounts"
          ]
        },
        {
          "label": "Equity",
          "items": [
            "Ordinary share capital",
            "Preference share capital",
            "General reserve",
            "Retained earnings"
          ]
        },
        {
          "label": "Shares and debentures",
          "items": [
            "Ordinary: variable dividend, votes",
            "Preference: fixed dividend paid first",
            "Debentures: loan, fixed interest"
          ]
        },
        {
          "label": "Share capital terms",
          "items": [
            "Issued: shares sold",
            "Called-up: amount asked for",
            "Paid-up: amount actually paid"
          ]
        },
        {
          "label": "Statements",
          "items": [
            "Debenture interest: expense in profit or loss",
            "Dividends: statement of changes in equity",
            "Transfer to reserve: no change in total equity"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is limited liability?",
        "back": "Shareholders can only lose what they paid, or agreed to pay, for their shares.",
        "tag": "Definition"
      },
      {
        "front": "What is equity in a company?",
        "back": "Share capital plus reserves: the shareholders' interest in the company.",
        "tag": "Definition"
      },
      {
        "front": "Name the four parts of the capital structure.",
        "back": "Ordinary share capital, preference share capital, general reserve, retained earnings."
      },
      {
        "front": "Ordinary shares: dividend and votes?",
        "back": "Dividend varies with profit (may be nothing). Usually have voting rights."
      },
      {
        "front": "Preference shares: dividend?",
        "back": "A fixed rate, paid before ordinary dividends."
      },
      {
        "front": "Is a debenture holder an owner?",
        "back": "No. A debenture holder is a lender, paid fixed interest."
      },
      {
        "front": "Where does debenture interest go?",
        "back": "The statement of profit or loss, as an expense."
      },
      {
        "front": "Where are dividends shown?",
        "back": "The statement of changes in equity, reducing retained earnings."
      },
      {
        "front": "Issued vs called-up vs paid-up share capital?",
        "back": "Issued: shares sold. Called-up: amount asked for so far. Paid-up: amount actually received."
      },
      {
        "front": "200,000 shares, $0.75 called, $10,000 unpaid. Paid-up capital?",
        "back": "200,000 x 0.75 = 150,000 minus 10,000 = $140,000",
        "tag": "Calculation"
      },
      {
        "front": "6% preference shares of $50,000. Dividend?",
        "back": "6% x 50,000 = $3,000",
        "tag": "Calculation"
      },
      {
        "front": "Effect of a transfer to general reserve on total equity?",
        "back": "None. It moves profit from retained earnings to the reserve."
      },
      {
        "front": "Is the general reserve cash?",
        "back": "No. It is part of equity, not money in the bank."
      },
      {
        "front": "Where are debentures shown on the statement of financial position?",
        "back": "Non-current liabilities, unless repayable within 12 months."
      }
    ]
  },
  "5.4": {
    "mindMap": {
      "centre": "Manufacturing accounts",
      "branches": [
        {
          "label": "Direct costs",
          "items": [
            "Direct material (raw materials used)",
            "Direct labour",
            "Direct expenses such as royalties",
            "Total = prime cost"
          ]
        },
        {
          "label": "Factory overheads",
          "items": [
            "Indirect labour",
            "Factory rent, power, insurance",
            "Depreciation of factory machinery"
          ]
        },
        {
          "label": "Work in progress",
          "items": [
            "Add opening work in progress",
            "Deduct closing work in progress",
            "Gives cost of production"
          ]
        },
        {
          "label": "Trading section",
          "items": [
            "Cost of production replaces purchases",
            "Uses finished goods inventory"
          ]
        },
        {
          "label": "Not in the manufacturing account",
          "items": [
            "Office and selling costs",
            "Split shared costs such as rent",
            "Three inventories on the statement of financial position"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is prime cost?",
        "back": "Direct material + Direct labour + Direct expenses",
        "tag": "Formula"
      },
      {
        "front": "Cost of raw materials consumed formula?",
        "back": "Opening raw materials + Purchases + Carriage inwards minus Closing raw materials",
        "tag": "Formula"
      },
      {
        "front": "Give two examples of factory overheads.",
        "back": "Any two: indirect wages, factory rent, factory power, depreciation of factory machinery, factory insurance."
      },
      {
        "front": "What is work in progress?",
        "back": "Goods that are partly made at the year end.",
        "tag": "Definition"
      },
      {
        "front": "How is work in progress adjusted?",
        "back": "Add opening work in progress, deduct closing work in progress."
      },
      {
        "front": "What is cost of production?",
        "back": "The total factory cost of the goods completed in the year.",
        "tag": "Definition"
      },
      {
        "front": "Where does cost of production go?",
        "back": "Into the trading section of the statement of profit or loss, in place of purchases."
      },
      {
        "front": "Is office rent in the manufacturing account?",
        "back": "No. It is an expense in the statement of profit or loss."
      },
      {
        "front": "Rent $9,000 split 2/3 factory. Factory share?",
        "back": "2/3 x 9,000 = $6,000",
        "tag": "Calculation"
      },
      {
        "front": "Are royalties direct or indirect?",
        "back": "Direct expenses, if paid for each item made."
      },
      {
        "front": "Name the three inventories of a manufacturer.",
        "back": "Raw materials, work in progress, finished goods."
      },
      {
        "front": "Which inventory goes in the trading section?",
        "back": "Finished goods only."
      },
      {
        "front": "Prime cost 86,000, overheads 22,000, opening WIP 5,000, closing WIP 4,000. Cost of production?",
        "back": "86,000 + 22,000 + 5,000 minus 4,000 = $109,000",
        "tag": "Calculation"
      }
    ]
  },
  "5.5": {
    "mindMap": {
      "centre": "Clubs and societies",
      "branches": [
        {
          "label": "Words used",
          "items": [
            "Accumulated fund (capital)",
            "Income and expenditure account",
            "Surplus or deficit"
          ]
        },
        {
          "label": "Receipts and payments",
          "items": [
            "Summary of the cash book",
            "Includes capital items",
            "No adjustments, no surplus shown"
          ]
        },
        {
          "label": "Income and expenditure",
          "items": [
            "Revenue items only",
            "Accruals, prepayments, depreciation",
            "Shows surplus or deficit"
          ]
        },
        {
          "label": "Subscriptions",
          "items": [
            "In arrears: current asset",
            "In advance: current liability",
            "Account finds income for the year"
          ]
        },
        {
          "label": "Other parts",
          "items": [
            "Refreshment trading account: only profit moves on",
            "Opening accumulated fund = assets minus liabilities",
            "New equipment is capital, not expenditure"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the club word for capital?",
        "back": "Accumulated fund."
      },
      {
        "front": "What is the club word for profit and loss?",
        "back": "Surplus and deficit."
      },
      {
        "front": "What is a receipts and payments account?",
        "back": "A summary of the cash book showing all money received and paid, with opening and closing balances.",
        "tag": "Definition"
      },
      {
        "front": "Does a receipts and payments account show the surplus?",
        "back": "No. It ignores accruals, prepayments and depreciation."
      },
      {
        "front": "How is an income and expenditure account different?",
        "back": "Revenue items only, adjusted for accruals, prepayments and depreciation. It shows the surplus or deficit."
      },
      {
        "front": "Subscriptions in arrears: asset or liability?",
        "back": "Current asset. Members owe the club."
      },
      {
        "front": "Subscriptions in advance: asset or liability?",
        "back": "Current liability. The club owes members a future year."
      },
      {
        "front": "Received $6,200. Opening arrears 300, advance 150. Closing arrears 400, advance 350. Subscription income?",
        "back": "6,200 minus 300 + 150 + 400 minus 350 = $6,100",
        "tag": "Calculation"
      },
      {
        "front": "Refreshment sales: what goes to the income and expenditure account?",
        "back": "Only the profit (or loss) on refreshments."
      },
      {
        "front": "How is the opening accumulated fund found?",
        "back": "Opening assets minus opening liabilities (a statement of affairs)."
      },
      {
        "front": "New equipment bought: income and expenditure account?",
        "back": "No. It is capital expenditure. Only depreciation goes in."
      },
      {
        "front": "Equipment 5,000 + bought 2,400, valued at 6,200. Depreciation?",
        "back": "5,000 + 2,400 minus 6,200 = $1,200",
        "tag": "Calculation"
      },
      {
        "front": "Closing accumulated fund formula?",
        "back": "Opening accumulated fund + Surplus (or minus Deficit)",
        "tag": "Formula"
      }
    ]
  },
  "5.6": {
    "mindMap": {
      "centre": "Incomplete records",
      "branches": [
        {
          "label": "Why used",
          "items": [
            "Cheaper and simpler",
            "No trial balance, errors hard to find",
            "Sole traders only in this syllabus"
          ]
        },
        {
          "label": "Change in capital",
          "items": [
            "Statement of affairs: assets minus liabilities",
            "Profit = closing minus opening capital",
            "Add drawings, less capital introduced"
          ]
        },
        {
          "label": "Missing figures",
          "items": [
            "Total receivables account: credit sales",
            "Total payables account: credit purchases",
            "Adjust expenses for accruals and prepayments"
          ]
        },
        {
          "label": "Mark-up and margin",
          "items": [
            "Mark-up: GP / cost of sales",
            "Margin: GP / revenue",
            "1/2 mark-up = 1/3 margin"
          ]
        },
        {
          "label": "Inventory turnover",
          "items": [
            "Cost of sales / average inventory",
            "Use it to find cost of sales or inventory"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a statement of affairs?",
        "back": "A list of assets and liabilities at a date. The difference is capital.",
        "tag": "Definition"
      },
      {
        "front": "Profit from change in capital formula?",
        "back": "Closing capital minus Opening capital + Drawings minus Capital introduced",
        "tag": "Formula"
      },
      {
        "front": "Opening capital 24,000, closing 31,500, drawings 9,000, capital introduced 2,000. Profit?",
        "back": "31,500 minus 24,000 + 9,000 minus 2,000 = $14,500",
        "tag": "Calculation"
      },
      {
        "front": "Why are drawings added back?",
        "back": "They reduced capital, but they are not a business cost."
      },
      {
        "front": "How are credit sales found?",
        "back": "From a total trade receivables account. The missing figure balances it."
      },
      {
        "front": "Opening receivables 3,000, received 41,000, discount 500, closing 4,200. Credit sales?",
        "back": "41,000 + 500 + 4,200 minus 3,000 = $42,700",
        "tag": "Calculation"
      },
      {
        "front": "Mark-up formula?",
        "back": "Gross profit / Cost of sales x 100",
        "tag": "Formula"
      },
      {
        "front": "Margin formula?",
        "back": "Gross profit / Revenue x 100",
        "tag": "Formula"
      },
      {
        "front": "Mark-up 50%. What is the margin?",
        "back": "33 1/3% (mark-up 1/2 means margin 1/3)."
      },
      {
        "front": "Margin 1/5. What is the mark-up?",
        "back": "1/4, which is 25%."
      },
      {
        "front": "Sales 48,000, mark-up 50%. Gross profit?",
        "back": "Margin 1/3, so gross profit = 16,000. Cost of sales = 32,000.",
        "tag": "Calculation"
      },
      {
        "front": "Inventory turnover 8 times, average inventory 4,000. Cost of sales?",
        "back": "8 x 4,000 = $32,000",
        "tag": "Calculation"
      },
      {
        "front": "Give two disadvantages of incomplete records.",
        "back": "Any two: no trial balance to find errors, profit only estimated, poor control of receivables and inventory, may not be accepted by banks or tax authorities, fraud may go unnoticed."
      }
    ]
  },
  "6.1": {
    "mindMap": {
      "centre": "Accounting ratios",
      "branches": [
        {
          "label": "Profitability",
          "items": [
            "Gross profit margin: GP / revenue x 100",
            "Mark-up: GP / cost of sales x 100",
            "Profit margin: profit / revenue x 100",
            "ROCE: profit before interest / capital employed x 100"
          ]
        },
        {
          "label": "Liquidity",
          "items": [
            "Current ratio: CA / CL",
            "Acid test: (CA minus inventory) / CL",
            "Written as a ratio, such as 2.5 : 1"
          ]
        },
        {
          "label": "Efficiency",
          "items": [
            "Inventory turnover: cost of sales / average inventory",
            "Inventory days: average inventory / cost of sales x 365",
            "Receivables days: receivables / credit sales x 365",
            "Payables days: payables / credit purchases x 365"
          ]
        },
        {
          "label": "Capital employed",
          "items": [
            "Company: issued shares + reserves + non-current liabilities",
            "Sole trader: capital + non-current liabilities"
          ]
        },
        {
          "label": "Exam habits",
          "items": [
            "Use syllabus formulas only",
            "Average inventory = (opening + closing) / 2",
            "Show formula, figures, answer"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Gross profit margin formula?",
        "back": "Gross profit / Revenue x 100",
        "tag": "Formula"
      },
      {
        "front": "Mark-up formula?",
        "back": "Gross profit / Cost of sales x 100",
        "tag": "Formula"
      },
      {
        "front": "Profit margin formula?",
        "back": "Profit for the year / Revenue x 100",
        "tag": "Formula"
      },
      {
        "front": "ROCE formula?",
        "back": "Profit for the year before interest / Capital employed x 100",
        "tag": "Formula"
      },
      {
        "front": "Capital employed for a limited company?",
        "back": "Issued shares + Reserves + Non-current liabilities",
        "tag": "Formula"
      },
      {
        "front": "Current ratio formula?",
        "back": "Current assets / Current liabilities",
        "tag": "Formula"
      },
      {
        "front": "Acid test ratio formula?",
        "back": "(Current assets minus Inventory) / Current liabilities",
        "tag": "Formula"
      },
      {
        "front": "Rate of inventory turnover formula?",
        "back": "Cost of sales / Average inventory",
        "tag": "Formula"
      },
      {
        "front": "Trade receivables turnover (days) formula?",
        "back": "Trade receivables / Credit sales x 365",
        "tag": "Formula"
      },
      {
        "front": "Trade payables turnover (days) formula?",
        "back": "Trade payables / Credit purchases x 365",
        "tag": "Formula"
      },
      {
        "front": "Gross profit 60,000, revenue 200,000. Gross profit margin?",
        "back": "60,000 / 200,000 x 100 = 30%",
        "tag": "Calculation"
      },
      {
        "front": "Current assets 50,000, inventory 20,000, current liabilities 20,000. Acid test?",
        "back": "(50,000 minus 20,000) / 20,000 = 1.5 : 1",
        "tag": "Calculation"
      },
      {
        "front": "Why add back interest for ROCE?",
        "back": "ROCE uses profit before interest, so lenders' and owners' capital are judged on the same profit."
      },
      {
        "front": "Receivables days: total sales or credit sales?",
        "back": "Credit sales."
      }
    ]
  },
  "6.2": {
    "mindMap": {
      "centre": "Interpreting ratios",
      "branches": [
        {
          "label": "How to comment",
          "items": [
            "Compare: last year, budget, competitor",
            "Say better or worse, with figures",
            "Give a reason",
            "Suggest an action"
          ]
        },
        {
          "label": "Gross profit changes",
          "items": [
            "Selling price up: margin up",
            "Buying cost up: margin down",
            "More units at same margin: GP up, margin same",
            "Theft, damage, sales mix"
          ]
        },
        {
          "label": "Profit for the year",
          "items": [
            "Gross profit + other income minus expenses",
            "Margin falls faster than GP margin: expenses grew"
          ]
        },
        {
          "label": "Improve profit",
          "items": [
            "Raise prices, cheaper suppliers",
            "Control expenses, cut waste",
            "Push higher-margin products"
          ]
        },
        {
          "label": "Improve liquidity",
          "items": [
            "Collect from customers faster",
            "Hold less inventory",
            "Longer credit from suppliers",
            "Long-term finance, fewer drawings"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Four steps to interpret a ratio?",
        "back": "Compare it, say if it is better or worse, explain a reason, suggest an action.",
        "tag": "Method"
      },
      {
        "front": "Gross profit margin fell. Two possible reasons.",
        "back": "Any two: selling prices cut, buying costs rose and were not passed on, more low-margin goods sold, theft or damage of inventory."
      },
      {
        "front": "Gross profit margin steady but profit margin fell. Why?",
        "back": "Expenses grew faster than sales."
      },
      {
        "front": "Acid test ratio below 1 : 1 means?",
        "back": "Without selling inventory, the business cannot pay all its current liabilities."
      },
      {
        "front": "Give two ways to improve profitability.",
        "back": "Any two: raise selling prices, find cheaper suppliers or bulk discounts, control expenses, promote higher-margin products, reduce theft and waste."
      },
      {
        "front": "Give two ways to improve liquidity.",
        "back": "Any two: collect debts faster, hold less inventory, get longer credit from suppliers, owner adds capital, long-term loan instead of overdraft, sell unused assets, reduce drawings."
      },
      {
        "front": "Does depreciation reduce cash?",
        "back": "No. It reduces profit but no cash is paid."
      },
      {
        "front": "Does buying a non-current asset reduce profit?",
        "back": "Not directly. Cash goes out, but only depreciation is charged to profit."
      },
      {
        "front": "Does repaying a loan affect profit?",
        "back": "No. It reduces cash only."
      },
      {
        "front": "Do drawings affect profit?",
        "back": "No. They reduce cash and capital."
      },
      {
        "front": "Credit sales not yet paid: profit or cash?",
        "back": "Included in profit (revenue) but no cash received yet."
      },
      {
        "front": "Revenue up 25% but profit down. First thing to check?",
        "back": "Which expenses rose, and whether selling prices or buying costs changed."
      },
      {
        "front": "Inventory turnover slower than last year means?",
        "back": "Goods are selling more slowly and more money is tied up in inventory."
      }
    ]
  },
  "6.3": {
    "mindMap": {
      "centre": "Inter-business comparison",
      "branches": [
        {
          "label": "Why compare",
          "items": [
            "Benchmark against a competitor",
            "Choose between investments",
            "Ratios remove the effect of size"
          ]
        },
        {
          "label": "Business differences",
          "items": [
            "Type of business and size",
            "Location and rent",
            "Owning or renting premises",
            "Cash or credit sales"
          ]
        },
        {
          "label": "Financial differences",
          "items": [
            "Loans and interest",
            "Age of assets",
            "Drawings vs directors' salaries"
          ]
        },
        {
          "label": "Accounting differences",
          "items": [
            "Depreciation methods and rates",
            "Inventory valuation",
            "Different year ends"
          ]
        },
        {
          "label": "Other problems",
          "items": [
            "Limited published information",
            "Historic cost",
            "One-off events, non-financial factors"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Why use ratios to compare businesses?",
        "back": "Ratios remove the effect of size, so different-sized businesses can be compared."
      },
      {
        "front": "Supermarket vs jeweller: typical difference?",
        "back": "Supermarket: low margin, fast inventory turnover. Jeweller: high margin, slow turnover."
      },
      {
        "front": "How does renting premises affect ratios?",
        "back": "Rent is an expense, lowering profit margin. Capital employed is lower than for a business that owns."
      },
      {
        "front": "How do different depreciation methods affect comparison?",
        "back": "They give different expenses and asset values, so profit and ROCE are not comparable."
      },
      {
        "front": "Why do different year ends cause problems?",
        "back": "Seasonal businesses look very different at different times of year."
      },
      {
        "front": "How do old, fully depreciated assets affect ROCE?",
        "back": "Low depreciation and low capital employed make ROCE look higher."
      },
      {
        "front": "How does a large loan affect profit for the year?",
        "back": "Interest is an expense, so profit for the year is lower."
      },
      {
        "front": "Sole trader drawings vs company directors' salaries?",
        "back": "Drawings are not an expense. Directors' salaries are. This affects profit comparison."
      },
      {
        "front": "Give two problems of inter-business comparison.",
        "back": "Any two: different policies, sizes or types, different year ends, limited information, historic cost, one-off events, non-financial factors missing."
      },
      {
        "front": "Why is information about other sole traders hard to get?",
        "back": "Sole traders and partnerships do not publish their accounts."
      },
      {
        "front": "Shop A and Shop B have the same GP margin but B has double the profit margin. A rents, B owns. Conclusion?",
        "back": "B saves on rent, but has more capital tied up, so its ROCE may be lower. Do not judge from one ratio."
      },
      {
        "front": "Name one non-financial factor ratios do not show.",
        "back": "Any one: staff skills, customer loyalty, reputation, product quality, location quality."
      }
    ]
  },
  "6.4": {
    "mindMap": {
      "centre": "Interested parties",
      "branches": [
        {
          "label": "Owners and investors",
          "items": [
            "Owners: profit, safety, drawings",
            "Shareholders: return and dividends",
            "Decide to invest, keep or sell"
          ]
        },
        {
          "label": "Inside the business",
          "items": [
            "Managers: performance, cost control",
            "Employees: job security, pay rises"
          ]
        },
        {
          "label": "Lenders and suppliers",
          "items": [
            "Banks: can loans be repaid?",
            "Suppliers: will they be paid on time?",
            "Look at liquidity ratios"
          ]
        },
        {
          "label": "Others",
          "items": [
            "Customers: will supplies continue?",
            "Government: tax and statistics",
            "Club members: surplus, fees",
            "Public: community and environment"
          ]
        },
        {
          "label": "Internal vs external",
          "items": [
            "Internal: managers, owners of small firms",
            "External: see published statements only"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What do owners want from accounting information?",
        "back": "To know if profit is enough and the business is safe, and how much they can take as drawings."
      },
      {
        "front": "What do shareholders mainly want to know?",
        "back": "Whether they will get a good return and whether their investment is safe."
      },
      {
        "front": "What do managers use ratios for?",
        "back": "To check performance against budgets and past years, and to decide on prices, costs and investment."
      },
      {
        "front": "What do employees want to know?",
        "back": "Whether their jobs are safe and whether the business can afford pay rises."
      },
      {
        "front": "What does a bank want to know before lending?",
        "back": "Whether the business can repay the loan and pay interest."
      },
      {
        "front": "Which ratios does a bank look at?",
        "back": "Liquidity ratios, profit, and assets available as security."
      },
      {
        "front": "What does a supplier want to know before giving credit?",
        "back": "Whether the business will pay on time."
      },
      {
        "front": "Supplier sees current ratio 0.9 : 1 and payables days up from 40 to 85. Likely decision?",
        "back": "Refuse credit, lower the credit limit, or ask for faster payment."
      },
      {
        "front": "Why are customers interested?",
        "back": "To know the business will keep supplying goods, spare parts or guarantees."
      },
      {
        "front": "Why is the government interested?",
        "back": "To collect the right amount of tax and for economic statistics."
      },
      {
        "front": "Why are club members interested?",
        "back": "To see if the club is well run and whether subscriptions will rise."
      },
      {
        "front": "Internal vs external users?",
        "back": "Internal users work inside the business and see detailed information. External users see only published statements."
      }
    ]
  },
  "6.5": {
    "mindMap": {
      "centre": "Limits of financial statements",
      "branches": [
        {
          "label": "Historic cost",
          "items": [
            "Assets at original price",
            "Values go out of date",
            "Inflation distorts comparisons"
          ]
        },
        {
          "label": "Accounting policies",
          "items": [
            "Depreciation method and rate",
            "Inventory and allowance estimates",
            "Same transactions, different profits"
          ]
        },
        {
          "label": "Not measured in money",
          "items": [
            "Staff skills and morale",
            "Location and reputation",
            "Competition and economic climate",
            "Environmental and social impact"
          ]
        },
        {
          "label": "Other limits",
          "items": [
            "Shows the past, not the future",
            "Picture at one date only",
            "Small firms often not audited"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the historic cost problem?",
        "back": "Assets are shown at the price paid, which may be far from their value today."
      },
      {
        "front": "How does inflation limit financial statements?",
        "back": "Figures from different years cannot be compared fairly. Higher sales may only be price rises."
      },
      {
        "front": "How do accounting policies limit comparison?",
        "back": "Different choices, such as depreciation methods, give different profits from the same transactions."
      },
      {
        "front": "Name two estimates in financial statements.",
        "back": "Any two: useful life, residual value, allowance for irrecoverable debts, net realisable value of inventory."
      },
      {
        "front": "Which concept means staff skills are not shown?",
        "back": "Money measurement."
      },
      {
        "front": "Give three non-financial factors not shown in the statements.",
        "back": "Any three: staff skills, morale, location, reputation, product quality, competition, economic climate, environmental impact."
      },
      {
        "front": "Why does showing the past limit the statements?",
        "back": "Users usually want to predict the future, and past results may not continue."
      },
      {
        "front": "Why is a \"picture at one date\" a limitation?",
        "back": "The position may be very different a few weeks later."
      },
      {
        "front": "Are the statements wrong because of these limits?",
        "back": "No. They follow the rules, but they do not show everything."
      },
      {
        "front": "Two businesses have the same ROCE. Why might one still be the better investment?",
        "back": "Things not in the statements, such as a skilled team or a new product, or a new competitor nearby for the other."
      },
      {
        "front": "Land bought for $50,000 twenty years ago. Problem?",
        "back": "It may now be worth far more, but the statement may still show $50,000."
      },
      {
        "front": "Why does a lack of audit matter for small businesses?",
        "back": "The figures have not been checked by an independent person."
      }
    ]
  },
  "7.1": {
    "mindMap": {
      "centre": "Accounting concepts",
      "branches": [
        {
          "label": "Recording",
          "items": [
            "Duality: every transaction has two sides",
            "Money measurement: only money items",
            "Business entity: business separate from owner"
          ]
        },
        {
          "label": "Valuing",
          "items": [
            "Historic cost: price actually paid",
            "Going concern: business will keep trading",
            "Prudence: do not overstate"
          ]
        },
        {
          "label": "Timing",
          "items": [
            "Matching: income and expenses in their period",
            "Realisation: revenue when goods pass to customer"
          ]
        },
        {
          "label": "Applying",
          "items": [
            "Consistency: same methods every year",
            "Materiality: small items treated simply"
          ]
        },
        {
          "label": "Links to topics",
          "items": [
            "Depreciation: matching, consistency",
            "Inventory: prudence, realisation",
            "Drawings: business entity"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Business entity concept?",
        "back": "The business is separate from its owner. Only business transactions are recorded.",
        "tag": "Concept"
      },
      {
        "front": "Consistency concept?",
        "back": "The same methods are used from one year to the next.",
        "tag": "Concept"
      },
      {
        "front": "Duality concept?",
        "back": "Every transaction has two effects, recorded as a debit and a credit.",
        "tag": "Concept"
      },
      {
        "front": "Going concern concept?",
        "back": "The business is expected to keep trading for the foreseeable future.",
        "tag": "Concept"
      },
      {
        "front": "Historic cost concept?",
        "back": "Assets are recorded at the price actually paid.",
        "tag": "Concept"
      },
      {
        "front": "Matching (accruals) concept?",
        "back": "Income and expenses are recorded in the period they belong to.",
        "tag": "Concept"
      },
      {
        "front": "Materiality concept?",
        "back": "Small items that would not affect decisions can be treated in the simplest way.",
        "tag": "Concept"
      },
      {
        "front": "Money measurement concept?",
        "back": "Only items that can be measured in money are recorded.",
        "tag": "Concept"
      },
      {
        "front": "Prudence concept?",
        "back": "Do not overstate profits or assets. Recognise expected losses now, gains only when certain.",
        "tag": "Concept"
      },
      {
        "front": "Realisation concept?",
        "back": "Revenue is recognised when goods or services pass to the customer.",
        "tag": "Concept"
      },
      {
        "front": "Owner's son's school fees paid from the business are drawings. Concept?",
        "back": "Business entity."
      },
      {
        "front": "Goods delivered 30 December, paid in January. Sale in December. Concept?",
        "back": "Realisation."
      },
      {
        "front": "An $8 bin charged as an office expense. Concept?",
        "back": "Materiality."
      },
      {
        "front": "Allowance made for a customer in trouble. Concept?",
        "back": "Prudence."
      }
    ]
  },
  "7.2": {
    "mindMap": {
      "centre": "Ethics in accounting",
      "branches": [
        {
          "label": "Why ethics",
          "items": [
            "Users trust the figures",
            "Pressure from owners and managers",
            "Access to private information",
            "Principles help when no rule fits"
          ]
        },
        {
          "label": "Honesty and fairness",
          "items": [
            "Integrity: straightforward and honest",
            "Objectivity: no bias or pressure"
          ]
        },
        {
          "label": "Skill and care",
          "items": [
            "Professional competence and due care",
            "Keep knowledge up to date"
          ]
        },
        {
          "label": "Trust",
          "items": [
            "Confidentiality: protect information",
            "Professional behaviour: obey laws"
          ]
        },
        {
          "label": "Who benefits",
          "items": [
            "Owners, investors, lenders",
            "Employees, suppliers, customers",
            "Government and society"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Name the five fundamental principles.",
        "back": "Integrity, objectivity, professional competence and due care, confidentiality, professional behaviour."
      },
      {
        "front": "Integrity means?",
        "back": "Being straightforward and honest in all work and business relationships.",
        "tag": "Principle"
      },
      {
        "front": "Objectivity means?",
        "back": "Not letting bias, conflicts of interest or pressure from others affect judgement.",
        "tag": "Principle"
      },
      {
        "front": "Professional competence and due care means?",
        "back": "Keeping knowledge and skills up to date and working carefully and properly.",
        "tag": "Principle"
      },
      {
        "front": "Confidentiality means?",
        "back": "Not sharing work information without permission (unless the law requires it) and not using it for personal gain.",
        "tag": "Principle"
      },
      {
        "front": "Professional behaviour means?",
        "back": "Obeying laws and regulations and avoiding anything that discredits the profession.",
        "tag": "Principle"
      },
      {
        "front": "Recording sales that never happened breaks which principle?",
        "back": "Integrity."
      },
      {
        "front": "Accepting a gift from a supplier, then approving its overpriced invoices, breaks?",
        "back": "Objectivity."
      },
      {
        "front": "Telling a friend about poor results so they can sell shares first breaks?",
        "back": "Confidentiality."
      },
      {
        "front": "Using out-of-date rules to prepare statements breaks?",
        "back": "Professional competence and due care."
      },
      {
        "front": "Owner asks the accountant to hide a $15,000 invoice before a loan application. What should the accountant do?",
        "back": "Refuse, explain why, and record the invoice correctly. Hiding it breaks integrity and objectivity."
      },
      {
        "front": "Why does ethical accounting matter to society?",
        "back": "It protects trust in businesses, ensures fair tax and reduces fraud and business failures."
      },
      {
        "front": "Can confidential information ever be shared?",
        "back": "Yes, with permission, or when there is a legal or professional duty."
      }
    ]
  },
  "7.3": {
    "mindMap": {
      "centre": "Technology and sustainability",
      "branches": [
        {
          "label": "Digital applications",
          "items": [
            "Accounting software and spreadsheets",
            "Online banking and digital invoices",
            "Card machines and receipt apps"
          ]
        },
        {
          "label": "Pros and cons",
          "items": [
            "Faster, fewer arithmetic errors",
            "Instant reports, easy backup",
            "Cost, training, cyber risks",
            "Entry errors still happen"
          ]
        },
        {
          "label": "Storing safely",
          "items": [
            "Risks: loss, hacking, fraud, legal penalties",
            "Passwords and access levels",
            "Regular backups kept elsewhere",
            "Antivirus and staff training"
          ]
        },
        {
          "label": "Storing sustainably",
          "items": [
            "Less paper with digital records",
            "Data centres use energy",
            "Recycle old devices",
            "Keep only what is needed"
          ]
        },
        {
          "label": "Types of storage",
          "items": [
            "Manual: no power needed, fire risk",
            "Devices: in your control, can fail",
            "Cloud: anywhere, needs internet"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Name three digital applications used in accounting.",
        "back": "Any three: accounting software, spreadsheets, online banking, digital invoicing, card machines and payment apps, receipt-scanning apps."
      },
      {
        "front": "Two advantages of digital accounting records.",
        "back": "Any two: faster, fewer arithmetic errors, instant reports, easy to search and back up, usable from different places, less paper."
      },
      {
        "front": "Two disadvantages of digital accounting records.",
        "back": "Any two: cost, training needed, viruses and hacking, data loss, depends on power or internet, entry errors still happen, over-reliance."
      },
      {
        "front": "Why must accounting data be stored safely?",
        "back": "Records are needed for tax, audits, disputes and decisions, and the law often requires them to be kept."
      },
      {
        "front": "Give three risks of not storing data safely.",
        "back": "Any three: loss, hacking, unauthorised access, fraud, legal penalties, damage to reputation, business cannot operate."
      },
      {
        "front": "Give three ways to keep data safe.",
        "back": "Any three: passwords and access levels, regular backups stored elsewhere, antivirus and updates, locked or fireproof storage, staff training."
      },
      {
        "front": "Why is digital storage not automatically sustainable?",
        "back": "Data centres use a lot of energy and water, and old devices become electronic waste."
      },
      {
        "front": "Give two ways to store data more sustainably.",
        "back": "Any two: reduce paper, delete data no longer needed, recycle old equipment, choose energy-efficient storage."
      },
      {
        "front": "Advantage and disadvantage of manual storage?",
        "back": "Advantage: no power needed and cannot be hacked. Disadvantage: fire or flood risk, slow to search, hard to back up."
      },
      {
        "front": "Advantage and disadvantage of storage devices?",
        "back": "Advantage: business controls the data, no internet needed. Disadvantage: can be lost, stolen or fail."
      },
      {
        "front": "Advantage and disadvantage of cloud storage?",
        "back": "Advantage: access anywhere, automatic backups. Disadvantage: needs internet, ongoing fees, depends on the provider."
      },
      {
        "front": "Records kept on one laptop taken home nightly. Main risk and fix?",
        "back": "Loss or theft with no backup. Use a password and back up to the cloud and an external drive."
      },
      {
        "front": "Do you need to know specific accounting software for the exam?",
        "back": "No."
      }
    ]
  }
};

export function getOLevelRevision(topic: string): TopicRevision | null {
  return O_LEVEL_ACCOUNTING_REVISION[topic] ?? null;
}
