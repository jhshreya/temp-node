// npm - a global command comes with node
//npm --version

//local dependency-use it only in this particular prject
//npm i <packagename>

//global dependency-use it in any project
//npm install -g <packagename>
//package.json-manifest file(stores imp info about the project)
//manual approach(create package json in the root,create propperties etc)
//npm init(step by step,press enter to skip)
//npm init -y(eveything default)

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems);