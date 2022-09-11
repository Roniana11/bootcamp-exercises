function concat(str: string | string[], bool: boolean | number){
  if( bool || bool === 1){
    let returnVal = typeof str === 'string' ? str : str.join('');
    console.log(returnVal);
  }
}

concat(['h','e','l'],false);
concat(['h','e','l'],1);
concat(['h','e','l'],0);
concat(['h','e','l'],true);
concat('hello',true);
concat('hello',false);
concat('hello',1);
concat('hello',0);


