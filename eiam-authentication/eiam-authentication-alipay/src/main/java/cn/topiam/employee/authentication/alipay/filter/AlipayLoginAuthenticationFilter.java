/*
 * eiam-authentication-gitee - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
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
package cn.topiam.employee.authentication.alipay.filter;

import cn.topiam.employee.authentication.common.filter.AbstractIdpAuthenticationProcessingFilter;
import cn.topiam.employee.authentication.common.service.UserIdpService;
import cn.topiam.employee.common.repository.authentication.IdentityProviderRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import java.io.IOException;

/**
 * 支付宝 登录过滤器
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2023/8/19 17:58
 */
@SuppressWarnings("DuplicatedCode")
public class AlipayLoginAuthenticationFilter extends AbstractIdpAuthenticationProcessingFilter {


    /**
     * Creates a new instance
     *
     * @param defaultFilterProcessesUrl  the {@link String}
     * @param userIdpService             {@link  UserIdpService}
     * @param identityProviderRepository {@link IdentityProviderRepository}
     */
    protected AlipayLoginAuthenticationFilter(String defaultFilterProcessesUrl, UserIdpService userIdpService, IdentityProviderRepository identityProviderRepository) {
        super(defaultFilterProcessesUrl, userIdpService, identityProviderRepository);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
        return null;
    }
}
