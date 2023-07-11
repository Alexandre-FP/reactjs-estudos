    // Ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    // array.reduce(callback[, initialValue])
    //
    // callback - Função que é executada em cada valor no array, recebe quatro argumentos:
    //   acumulator - O valor retornado na última invocação do *callback*, ou o argumento Valor Inicial, se fornecido.
    //   currentValue - O elemento atual que está sendo processado no array.
    //   indice - O índice do elemento atual que está sendo processado no array.
    //   array - O array ao qual a função reduce foi chamada.
    //   initialValue - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.

    let values = [1.5, 2, 4, 10]

    function callback(acumulator, currentValue, index, array) {
      console.log(`acumulator`, acumulator)
      console.log(`currentValue`, currentValue)
      console.log(`index`, index)
      console.log(`array`, array)
      console.log("---")

      // return acumulator
    }

    values.reduce(callback, 0)

    // Agregação
    let sum = values.reduce((total, item) => total + item, 0)
    // console.log("sum", sum)

    let avg = values.reduce(
      (total, item, index) => (total + item) / (index + 1),
      0
    )
    // console.log("avg", avg)

    // Map
    let double = values.reduce((total, item) => total.concat(item * 2), [])
    // console.log("double", double)

    // Filter
    let newValues = values.reduce((total, item) => {
      if (item > 2) {
        total.push(item)
      }

      return total
    }, [])
    console.log("newValues", newValues)