const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyArr = [0]

// const btnLight = document.querySelector('.light')
// const btnDark = document.querySelector('.dark')

const showPanel = params => {
	addTransactionPanel.style.display = 'flex'
}

const closePanel = params => {
	addTransactionPanel.style.display = 'none'
	clearInputs()
}

const checkForm = () => {
	if (nameInput.value !== 0 && amountInput.value !== 0 && categorySelect.value !== 'none') {
		createNewTransaction()
	} else {
		alert('Wypełnij wszystkie pola')
	}
}

const clearInputs = () => {
	nameInput.value = ''
	amountInput.value = ''
	categorySelect.selectedIndex = 0
}

const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('transaction')
	newTransaction.setAttribute('id', ID)

	newTransaction.innerHTML = `
        <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
        <p class="transaction-amount">${amountInput.value} zł <button class="delete" onclick="deleteTransaction(ID)"><i
                    class="fas fa-times"></i></button></p>
    </div>`

	amountInput.value > 0
		? incomeSection.append(newTransaction) && newTransaction.classList.add('income')
		: expensesSection.append(newTransaction) && newTransaction.classList.add('expense')

	moneyArr.push(parseFloat[amountInput.value])

	closePanel()
    ID++
}

// const checkCategory = () => {
//     switch (selectedCategory.options[selectedCategory.selectedIndex].value) {
//         case 'income' : categoryIcon.innerHTML='<i class="fas fa-money-bill-wave"></i>'
//         break
//         case 'shopping' : categoryIcon.innerHTML='<i class="fas fa-cart-arrow-down"></i>'
//         break
//         case 'food' : categoryIcon.innerHTML='<i class="fas fa-hamburger"></i>'
//         break
//         case 'cinema' : categoryIcon.innerHTML='<i class="fas fa-film"></i>'
//     }
// }




addTransactionBtn.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', checkForm)
