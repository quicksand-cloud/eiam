/*
 * eiam-core - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.core.security.password.weak;

import java.util.List;

/**
 * 弱密码
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/8/16 23:59
 */
public interface PasswordWeakLib {
    /**
     * 弱密码是否存在
     *
     * @param word {@link String}
     * @return  {@link Boolean}
     */
    Boolean wordExists(String word);

    /**
     * 获取弱密码列表
     *
     * @return  {@link List<String>}
     */
    List<String> getWordList();
}