function ready() { 
  console.log("reordering")
  tbody = document.getElementsByTagName('tbody')[0]
  rows = Array.prototype.slice.call(tbody.children)
  console.log(rows)
  for (let i = 0; i < rows.length; i++) {
    tbody.removeChild(rows[i])
  }
  for (let i = 1; i <= rows.length; i++) {
    tbody.appendChild(rows[rows.length - i])
  }
}

console.log("url match")
ready()
