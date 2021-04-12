function addWords(obj, wrds) {
    let arr = [], result_str = '';
    obj.words += ` ${wrds}`;
  
    arr = obj.words.split(' ');
    arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (arr[0].length < 1)
      arr.shift();
  
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    arr.forEach(element => {
      result_str = result_str.concat(result_str.length < 1 ? '' : ' ', element);
    });
    obj.words = result_str;
  }
  
  function removeWords(obj, wrds) {
    let arr = [], obj_arr = [], result_arr = [], result_str = '', index = -1;
  
    arr = wrds.split(' ');
    arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (arr[0].length < 1)
      arr.shift();
  
    obj_arr = obj.words.split(' ');
    obj_arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (obj_arr[0].length < 1)
      obj_arr.shift();
  
    arr.forEach(element => {
      index = obj_arr.indexOf(element);
      while (index != -1) {
        obj_arr.splice(index, 1);
        index = obj_arr.indexOf(element);
      }
    });
  
    obj_arr.forEach(element => {
      result_str = result_str.concat(result_str.length < 1 ? '' : ' ', element);
    });
  
    obj.words = result_str;
  }
  
  function changeWords(obj, oldWrds, newWrds) {
    let arr = [], old_arr = [], new_arr = [];
  
    arr = obj.words.split(' ');
    arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (arr[0].length < 1)
      arr.shift();
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
  
    old_arr = oldWrds.split(' ');
    old_arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (old_arr[0].length < 1)
      old_arr.shift();
    old_arr = old_arr.filter((item, index) => old_arr.indexOf(item) === index);
  
    new_arr = newWrds.split(' ');
    new_arr.sort(function(a, b) {
      if (a.length < 1 || b.length < 1)
        return a.length - b.length;
      return 1;
    });
    while (new_arr[0].length < 1)
      new_arr.shift();
    new_arr = new_arr.filter((item, index) => new_arr.indexOf(item) === index);
  
    old_arr.forEach(pos => {
      if(arr.indexOf(pos) === -1)
          return 0;
      else
          arr.splice(arr.indexOf(pos), 1);
    });
    obj.words = arr.concat(new_arr).join(" ");
  }
  