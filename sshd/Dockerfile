FROM debian:latest
MAINTAINER Sylvain Huguet sylvain@huguet.me
RUN apt-get update \
	&& apt-get -y install openssh-server \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN mkdir -p /var/run/sshd \
	&& sed -i "s/UsePrivilegeSeparation.*/UsePrivilegeSeparation no/g" /etc/ssh/sshd_config \
  	&& sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
  	&& echo "root:toto42sh" | chpasswd
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
