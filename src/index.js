module.exports = function toReadable (number) {
  const numLength = number.length;
  const result = '';

  if (numLength === 3) {
    switch (number[0]){
        case 1 :
            result = 'one hundred';
        case 2 :
            result = 'two hundred';
        case 3 :
            result = 'three hundred';
        case 4 :
            result = 'four hundred';
        case 5 :
            result = 'five hundred';
        case 6 :
            result = 'six hundred';
        case 7 :
            result = 'seven hundred';
        case 8 :
            result = 'eight hundred';
        case 9 :
            result = 'nine hundred';
    }
    switch (number[1]){
        case 1 :
            switch (number [2]){
                case 0 :
                    result = result + ' ten';
                case 1 :
                    result = result + ' eleven';
                case 2 :
                    result = result + ' twelve';
                case 3 :
                    result = result + ' thirteen';
                case 4 :
                    result = result + ' fourteen';
                case 5 :
                    result = result + ' fifteen';
                case 6 :
                    result = result + ' sixteen';
                case 7 :
                    result = result + ' seventeen';
                case 8 :
                    result = result + ' eighteen';
                case 9 :
                    result = result + ' nineteen';
            }   
            return result;

        case 2 :
            result = result + ' twenty';
        case 3 :
            result = result + ' thirty';
        case 4 :
            result = result + ' forty';
        case 5 :
            result = result + ' fifty';
        case 6 :
            result = result + ' sixty';
        case 7 :
            result = result + ' seventy';
        case 8 :
            result = result + ' eighty';
        case 9 :
            result = result + ' ninety';
    }

    switch (number[2]){
        case 1 :
            result = result + ' one';
        case 2 :
            result = result + ' two';
        case 3 :
            result = result + ' three';
        case 4 :
            result = result + ' four';
        case 5 :
            result = result + ' five';
        case 6 :
            result = result + ' six';
        case 7 :
            result = result + ' seven';
        case 8 :
            result = result + ' eight';
        case 9 :
            result = result + ' nine';
    }
    return result;
  }

  else if (numLength === 2) {
    switch (number[0]){
        case 1 :
            switch (number [1]){
                case 0 :
                    result = 'ten';
                case 1 :
                    result = 'eleven';
                case 2 :
                    result = 'twelve';
                case 3 :
                    result = 'thirteen';
                case 4 :
                    result = 'fourteen';
                case 5 :
                    result = 'fifteen';
                case 6 :
                    result = 'sixteen';
                case 7 :
                    result = 'seventeen';
                case 8 :
                    result = 'eighteen';
                case 9 :
                    result = 'nineteen';
            }   
            return result;

        case 2 :
            result = 'twenty';
        case 3 :
            result = 'thirty';
        case 4 :
            result = 'forty';
        case 5 :
            result = 'fifty';
        case 6 :
            result = 'sixty';
        case 7 :
            result = 'seventy';
        case 8 :
            result = 'eighty';
        case 9 :
            result = 'ninety';
    }

    switch (number[1]){
        case 1 :
            result = result + ' one';
        case 2 :
            result = result + ' two';
        case 3 :
            result = result + ' three';
        case 4 :
            result = result + ' four';
        case 5 :
            result = result + ' five';
        case 6 :
            result = result + ' six';
        case 7 :
            result = result + ' seven';
        case 8 :
            result = result + ' eight';
        case 9 :
            result = result + ' nine';
    }
    return result;
  }

  else if (numLength === 1) {
    switch (number[0]){
        case 0 :
            result = 'zero';
        case 1 :
            result = 'one';
        case 2 :
            result = 'two';
        case 3 :
            result = 'three';
        case 4 :
            result = 'four';
        case 5 :
            result = 'five';
        case 6 :
            result = 'six';
        case 7 :
            result = 'seven';
        case 8 :
            result = 'eight';
        case 9 :
            result = 'nine';
    }
    return result;
  }
  return result;
}
