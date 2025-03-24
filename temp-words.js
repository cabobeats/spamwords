const fs = require('fs');
const path = require('path');

// Read existing spamwords.json
const spamwordsPath = path.join('src', 'data', 'spamwords.json');
const spamwordsData = JSON.parse(fs.readFileSync(spamwordsPath, 'utf8'));

// Extract existing terms
const existingTerms = new Set(spamwordsData.words.map(word => word.term));

// Parse the input list of new words
const newWordsInput = `
gift card	5	shady
gift certificate	5	shady
gift included	5	shady
give it away	6	shady
giving away	6	shady
giving it away	6	shady
gold	4	shady
great	1	shady
great deal	3	shady
greetings of the day	3	shady
growth hormone	8	shady
guarantee	5	shady
guaranteed deposit	6	shady
guaranteed income	6	shady
guaranteed payment	6	shady
have you been turned down?	6	shady
hello (with no name included)	3	shady
hidden charges	6	shady
hidden costs	6	shady
hidden fees	6	shady
high score	3	shady
home based business	6	shady
home mortgage	5	shady
human	1	shady
human growth hormone	8	shady
if only it were that easy	5	shady
important information	4	shady
important notification	4	shady
instant weight loss	8	shady
insurance lose weight	7	shady
internet marketing	5	shady
investment decision	4	shady
invoice	3	shady
it's effective	4	shady
job alert	4	shady
junk	5	shady
lambo	9	shady
laser printer	5	shady
last day	4	shady
legal	2	shady
legal notice	4	shady
life	4	shady
life insurance	5	shady
lifetime access	5	shady
lifetime deal	5	shady
limited	4	shady
limited amount	5	shady
limited number	5	shady
limited offer	5	shady
limited supply	4	shady
limited time offer	4	shady
limited time only	3	shady
loan	3	shady
long distance phone number	2	shady
long distance phone offer	3	shady
lose weight spam	10	shady
lower interest rate	4	shady
lower interest rates	4	shady
lower monthly payment	4	shady
lower your mortgage rate	6	shady
lowest insurance rates	6	shady
lowest interest rate	6	shady
lowest rate	3	shady
lowest rates	3	shady
luxury	2	shady
luxury car	2	shady
mail in order form	2	shady
mark this as not junk	3	shady
mass email	7	shady
medical	3	shady
medicine	3	shady
meet girls	8	shady
meet me	6	shady
meet women	8	shady
member	2	shady
member stuff	2	shady
message contains disclaimer	1	shady
message from	1	shady
millionaire	5	shady
millions	3	shady
mlm	7	shady
multi-level marketing	8	shady
name	1	shady
near you	4	shady
never before	2	shady
new	2	shady
new domain extensions	4	shady
nigerian	9	shady
no age restrictions	4	shady
no catch	2	shady
no claim forms	2	shady
no deposit required	3	shady
no disappointment	2	shady
no gimmick	2	shady
no hidden	2	shady
no interest	2	shady
no interests	2	shady
no inventory	2	shady
no investment	2	shady
no investment required	3	shady
no medical exams	3	shady
no middleman	2	shady
no payment required	2	shady
no purchase necessary	2	shady
no questions asked	2	shady
no selling	2	shady
no-obligation	2	shady
nominated bank account	3	shady
not intended	1	shady
not junk	1	shady
not scam	1	shady
notspam	1	shady
number 1	2	shady
obligation	2	shady
off	2	shady
off everything	2	shady
off shore	3	shady
offer extended	2	shady
offers	2	shady
one hundred percent	2	shady
one-time	2	shady
online biz opportunity	6	shady
online degree	5	shady
online income	6	shady
online job	5	shady
open	1	shady
opportunity	3	shady
opt-in	2	shady
order	2	shady
order shipped by	2	shady
order status	2	shady
orders shipped by	2	shady
orders shipped by shopper	8	shady
outstanding value	2	shady
outstanding values	2	shady
password	5	shady
passwords	7	shady
pay your bills	2	shady
per year	3	shady
per month	2	shady
perfect	2	shady
performance	2	shady
phone	2	shady
please	1	shady
please open	4	shady
presently	2	shady
print form signature	4	shady
print from signature	4	shady
print out and fax	4	shady
priority mail	4	shady
privately owned funds	3	shady
prizes	6	shady
problem with shipping	5	shady
problem with your order	5	shady
produced and sent out	3	shady
profit	2	shady
promise you	7	shady
purchase	2	shady
pure profits	5	shady
quotes	2	shady
rate	2	shady
real thing	3	shady
rebate	6	shady
reduce debt	7	shady
refinance home	7	shady
refinanced home	7	shady
refund	6	shady
regarding	2	shady
removal instructions	6	shady
removes	8	shady
removes wrinkles	8	shady
replica watches	10	shady
request	2	shady
request now	3	shady
request today	3	shady
requires initial investment	8	shady
requires investment	8	shady
reverses aging	10	shady
risk free	5	shady
rolex	10	shady
round the world	2	shady
safeguard notice	4	shady
sale	2	shady
sales	2	shady
save	2	shady
save big	3	shady
save big month	3	shady
save money	2	shady
save now	2	shady
score with babes	10	shady
search engine optimisation	4	shady
section 301	4	shady
see for yourself	3	shady
seen on	3	shady
serious	2	shady
serious case	5	shady
serious offer	5	shady
serious only	5	shady
sex	10	shady
shop now	2	shady
shopper	4	shady
shopping spree	3	shady
snoring	5	shady
social security number	8	shady
soon	2	shady
spam	10	shady
spam free	2	shady
special deal	4	shady
special discount	4	shady
special for you	4	shady
stainless steel	5	shady
stock alert	6	shady
stock disclaimer statement	6	shady
stock pick	6	shady
stocks/stock pick/stock alert	6	shady
stop calling me	6	shady
stop emailing me	6	shady
stop further distribution	7	shady
stop snoring	8	shady
strong buy	6	shady
stuff on sale	2	shady
subject to	2	shady
subject to cash	7	shady
subscribe	2	shady
subscribe for free	3	shady
subscribe now	3	shady
super promo	4	shady
supplies	2	shady
this is an ad	5	shady
terms	2	shady
the best rates	3	shady
the following form	4	shady
they make a claim or claims that they're in accordance with spam law	7	shady
they try to keep your money no refund	9	shady
they're just giving it away	7	shady
this isn't junk	2	shady
this isn't spam	2	shady
this isn't a scam	2	shady
timeshare	6	shady
timeshare offers	7	shady
traffic	3	shady
trial unlimited	3	shady
u.s. dollars	2	shady
undisclosed	6	shady
undisclosed recipient	6	shady
university diplomas	8	shady
unsecured credit	6	shady
unsecured debt	6	shady
unsolicited	9	shady
unsubscribe	2	shady
urgent response	7	shady
euros	2	shady
vacation	6	shady
vacation offers	7	shady
valium	10	shady
vip	6	shady
visit our website	4	shady
wants credit card	8	shady
warranty expired	6	shady
we hate spam	2	shady
we honor all	3	shady
website visitors	4	shady
weekend getaway	5	shady
what's keeping you?	5	shady
while available	4	shady
while in stock	4	shady
while stocks last	5	shady
while you sleep	6	shady
who really wins?	6	shady
win	3	shady
winning	4	shady
won	5	shady
xanax	10	shady
xxx	10	shady
you have been chosen	7	shady
your chance	7	shady
your status	4	shady
zero chance	4	shady
zero percent	4	shady
zero risk	4	shady
#1	3	overpromise
%	3	overpromise
% free	4	overpromise
% satisfied	3	overpromise
0%	3	overpromise
0% risk	4	overpromise
100%	3	overpromise
100% free	6	overpromise
100% more	5	overpromise
100% off	5	overpromise
100% satisfied	5	overpromise
99.90%	3	overpromise
99%	3	overpromise
access for free	4	overpromise
additional income	5	overpromise
amazed	3	overpromise
amazing	3	overpromise
amazing offer	8	overpromise
amazing stuff	7	overpromise
be amazed	6	overpromise
be surprised	4	overpromise
be your own boss	7	overpromise
believe me	6	overpromise
best bargain	7	overpromise
best deal	6	overpromise
best offer	6	overpromise
best price	6	overpromise
best rates	6	overpromise
big bucks	7	overpromise
bonus	5	overpromise
boss	5	overpromise
can't live without	6	overpromise
cancel	3	overpromise
consolidate debt	6	overpromise
double your cash	6	overpromise
double your income	6	overpromise
drastically reduced	5	overpromise
earn extra cash	6	overpromise
earn money	5	overpromise
eliminate bad credit	6	overpromise
expect to earn	4	overpromise
extra	2	overpromise
extra cash	3	overpromise
extra income	3	overpromise
fantastic	3	overpromise
fantastic deal	4	overpromise
fantastic offer	4	overpromise
fast	5	overpromise
fast cash	6	overpromise
financial freedom	5	overpromise
free consultation	3	overpromise
free hosting	3	overpromise
free info	4	overpromise
free investment	6	overpromise
free membership	6	overpromise
free preview	4	overpromise
free quote	7	overpromise
full refund	2	overpromise
get out of debt	6	overpromise
giveaway	3	overpromise
increase sales	3	overpromise
increase traffic	3	overpromise
join billions	3	overpromise
join millions	3	overpromise
join millions of americans	3	overpromise
join thousands	3	overpromise
lower rates	3	overpromise
lowest price	3	overpromise
million	5	overpromise
month trial offer	4	overpromise
more internet traffic	4	overpromise
number one	4	overpromise
one hundred percent guaranteed	6	overpromise
one time	3	overpromise
pennies a day	3	overpromise
potential earnings	4	overpromise
prize	5	overpromise
promise	5	overpromise
pure profit	4	overpromise
satisfaction guaranteed	4	overpromise
save big money	4	overpromise
save up to	3	overpromise
special promotion	4	overpromise
the best	3	overpromise
thousands	3	overpromise
unbeatable offer	5	overpromise
unlimited trial	4	overpromise
wonderful	3	overpromise
you will not believe your eyes	5	overpromise
$$$	6	money
50% off	5	money
a few bob	2	money
accept cash cards	3	money
accept credit cards	3	money
affordable	2	money
affordable deal	2	money
avoid bankruptcy	4	money
bad credit	5	money
bank	2	money
bankruptcy	6	money
bargain	4	money
billing	2	money
billing address	2	money
billion	6	money
billion dollars	7	money
billionaire	4	money
card accepted	2	money
cards accepted	2	money
cash	3	money
cash bonus	3	money
cash out	3	money
cash-out	3	money
cashcashcash	6	money
casino	5	money
cents on the dollar	4	money
check	2	money
check or money order	4	money
claim your discount	3	money
cost	2	money
costs	2	money
credit	4	money
credit bureaus	5	money
credit card	5	money
credit card offers	5	money
credit or debit	4	money
deal	2	money
debt	5	money
discount	3	money
dollars	3	money
double your	4	money
double your wealth	4	money
earn	4	money
earn $	4	money
earn cash	4	money
earn extra income	4	money
earn from home	4	money
earn monthly	4	money
earn per month	4	money
earn per week	4	money
earn your degree	4	money
easy income	3	money
easy terms	3	money
f r e e	3	money
for free	3	money
for just $	3	money
for just $ (amount)	3	money
for just $xxx	3	money
get money	4	money
get your money	4	money
hidden assets	6	money
huge discount	4	money
income	4	money
income from home	4	money
increase revenue	4	money
increase sales/traffic	4	money
increase your chances	4	money
initial investment	4	money
instant earnings	4	money
instant income	4	money
insurance	4	money
investment	4	money
investment advice	4	money
lifetime	3	money
loans	4	money
make $	4	money
money	3	money
money making	4	money
money-back guarantee	4	money
money-making	4	money
monthly payment	2	money
only $	3	money
price	2	money
price protection	3	money
prices	2	money
profits	4	money
quote	2	money
rates	2	money
save $	3	money
serious cash	4	money
subject to credit	4	money
us dollars	2	money
why pay more?	3	money
your income	4	money
acceptance	2	unnatural
accordingly	1	unnatural
account-based marketing	3	unnatural
accounts	2	unnatural
addresses	2	unnatural
addresses on cd	5	unnatural
beverage	1	unnatural
confidentiality on all orders	2	unnatural
confidentially on all orders	2	unnatural
content marketing	3	unnatural
dear	2	unnatural
dear,	4	unnatural
digital marketing	3	unnatural
dormant	2	unnatural
email extractor	8	unnatural
email harvest	8	unnatural
email marketing	7	unnatural
extract email	8	unnatural
form	2	unnatural
freedom	2	unnatural
friend	2	unnatural
here	1	unnatural
hidden	3	unnatural
home	1	unnatural
home based	2	unnatural
home employment	2	unnatural
home-based	2	unnatural
homebased business	2	unnatural
if you no longer wish to receive	8	unnatural
important information regarding	6	unnatural
in accordance with laws	3	unnatural
increase your sales	5	unnatural
internet market	3	unnatural
leave	2	unnatural
lose	3	unnatural
maintained	2	unnatural
marketing	3	unnatural
marketing solution	3	unnatural
marketing solutions	3	unnatural
medium	2	unnatural
message contains	6	unnatural
multi level marketing	8	unnatural
never	2	unnatural
one time mailing	7	unnatural
online marketing	3	unnatural
online pharmacy	9	unnatural
opt in	5	unnatural
per day	2	unnatural
per week	2	unnatural
pre-approved	5	unnatural
problem	2	unnatural
removal	4	unnatural
remove	4	unnatural
reserves the right	3	unnatural
reverses	2	unnatural
sample	2	unnatural
satisfaction	2	unnatural
score	2	unnatural
search engine	2	unnatural
search engine listings	3	unnatural
search engines	2	unnatural
sent in compliance	3	unnatural
solution	2	unnatural
stop	2	unnatural
success	2	unnatural
teen	1	unnatural
terms and conditions	3	unnatural
warranty	2	unnatural
web traffic	3	unnatural
wife	1	unnatural
`;

// Parse the words from the input
const parseWords = (input) => {
  return input
    .trim()
    .split('\n')
    .map(line => {
      const parts = line.split('\t');
      if (parts.length >= 3) {
        return {
          term: parts[0].trim(),
          score: parseInt(parts[1]),
          category: parts[2].trim()
        };
      }
      return null;
    })
    .filter(word => word !== null);
};

const newWords = parseWords(newWordsInput);

// Filter out words that already exist
const wordsToAdd = newWords.filter(word => !existingTerms.has(word.term));

// Add new words to the existing words
spamwordsData.words = [...spamwordsData.words, ...wordsToAdd];

// Write the updated data back to the file
fs.writeFileSync(spamwordsPath, JSON.stringify(spamwordsData, null, 2));

console.log(`Added ${wordsToAdd.length} new words to the spam words list.`);
console.log('Total spam words after update:', spamwordsData.words.length);
