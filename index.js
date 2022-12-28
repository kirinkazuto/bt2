document.addEventListener('DOMContentLoaded', function () {
  const a = document.getElementById("a")
  const b = document.getElementById("b")
  const kq = document.getElementById("kq")

  function check() {
    if (!a.value || !b.value) {
      alert("Hãy nhập đủ số a và số b")
      return
    }
    if (isNaN(a.value) || isNaN(b.value)) {
      alert("a và số b không phải là số")
      return
    }
  }

  document.getElementById("+").addEventListener("click", () => {
    check()
    const kqpt = Number(a.value) + Number(b.value)
    kq.value = kqpt
  })
  document.getElementById("-").addEventListener("click", () => {
    check()
    const kqpt = Number(a.value) - Number(b.value)
    kq.value = kqpt
  })
  document.getElementById("*").addEventListener("click", () => {
    check()
    const kqpt = Number(a.value) * Number(b.value)
    kq.value = kqpt
  })
  document.getElementById("/").addEventListener("click", () => {
    check()
    const kqpt = Number(a.value) / Number(b.value)
    kq.value = kqpt
  })
})