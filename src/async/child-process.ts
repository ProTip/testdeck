import * as CP from 'child_process'
import * as util from 'util'

export const exec = util.promisify(CP.exec)

export const spawn = util.promisify(CP.spawn)