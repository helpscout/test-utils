const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up')
const arrify = require('arrify')
const has = require('lodash.has')

const { pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

exports.appDirectory = path.dirname(pkgPath)

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop))

const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`))

const hasPeerDep = hasPkgSubProp('peerDependencies')
const hasDep = hasPkgSubProp('dependencies')
const hasDevDep = hasPkgSubProp('devDependencies')

exports.hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args))
