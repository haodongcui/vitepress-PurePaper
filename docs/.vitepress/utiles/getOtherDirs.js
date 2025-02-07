import fs from 'fs';
import path from 'path';

/**
 * 获取/docs目录下的其他文件夹
 * @param {string[]} dirList 指定的文件夹路径列表
 * @returns {string[]} 剩余的文件夹路径
 */

export function getOtherDirs(dirList) {
    // 定义/docs目录的路径
    const nodeJsPath = process.cwd();
    const docsDir = path.join(nodeJsPath, 'docs');

    // 获取/docs目录下的所有内容
    const allDirs = fs.readdirSync(docsDir);

    // 过滤出文件夹并排除给定的路径
    const otherDirs = allDirs.filter(dir => {
        const fullDirPath = path.join(docsDir, dir);
        // 确保是文件夹并且不在排除列表中
        return fs.statSync(fullDirPath).isDirectory() && !dirList.includes(`/${dir}`);
    });

    // console.log(otherDirs);

    // 返回剩余的文件夹路径
    return otherDirs;
}