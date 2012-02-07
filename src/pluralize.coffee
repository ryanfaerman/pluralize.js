String::ends_with = (fragment) ->
  unless typeof fragment is 'string'
    return yes in (@.ends_with frag for frag in fragment)
  else
    return @[(@.length - fragment.length)..@.length] is fragment

String::pluralize = ->
  consonants = "qwrtpsdfghjklzxcvbnm".split('')
  ablaut =
    foot: 'feet'
    goose: 'geese'
    louse: 'lice'
    mouse: 'mice'
    tooth: 'teeth'
    person: 'people'
    ox: 'oxen'
    child: 'children'
  
  selfPlurals = [
    'deer'
    'moose'
    'sheep'
    'bison'
    'salmon'
    'pike'
    'trout'
    'fish'
    'swine'
    'aircraft'
    'blues'
    'cattle'
  ]

  # because we're lazy programmers
  remove_last_n_letters = (n) =>
    @[0..(@.length-n-1)]
  
  # self plural
  if "#{@}" in selfPlurals
    return "#{@}"

  # ablaut plural
  if ablaut["#{@}"]?
    return "#{ablaut[@]}"

  # series -> series
  if @.ends_with ['ies', 'ese']
    return "#{@}"

  # index -> indices
  if @.ends_with ['ix', 'ex']
    root = remove_last_n_letters 2
    return "#{root}ices"

  # woman -> women
  if @.ends_with 'man'
    root = remove_last_n_letters 3
    return "#{root}men"
  
  # knife -> knives
  if @.ends_with 'fe'
    root = remove_last_n_letters 2
    return "#{root}ves"
  
  # wolf -> wolves
  if @.ends_with 'f'
    root = remove_last_n_letters 1
    return "#{root}ves"

  # automaton -> automata
  if @.ends_with 'on'
    root = remove_last_n_letters 2
    return "#{root}a"
  
  # cactus -> cacti
  if @.ends_with 'us'
    root = remove_last_n_letters 2
    return "#{root}i"
  
  # axis -> axes
  if @.ends_with 'is'
    root = remove_last_n_letters 2
    return "#{root}es"
  
  # datum -> data
  if @.ends_with 'um'
    root = remove_last_n_letters 2
    return "#{root}a"
  
  # formula -> formulae
  if @.ends_with 'a' and "#{@}" in ['alumna', 'formula']
    root = remove_last_n_letters 1
    return "#{root}ae"
  
  # die -> dice
  if @.ends_with 'ie'
    root = remove_last_n_letters 1
    return "#{root}ce"

  # boss -> bosses
  if @.ends_with ['s', 'sh', 'z', 'x', 'ch', 'o']
    return "#{@}es" 
  
  # candy -> candies
  if @.ends_with ("#{c}y" for c in consonants)
    root = remove_last_n_letters 1
    return "#{root}ies"
  
  # its probably save now to just add an "s"
  return "#{@}s"